import {
  make,
  CSS,
  debounce,
  moveCaretToEnd,
  keepCustomInlineToolOnly,
  removeElementByClass,
  convertElementToText,
} from '@groupher/editor-utils'

import { TAB } from './constant'

import './index.css'

/**
 * Mention Tool for the Editor.js
 *
 * Allows to wrap inline fragment and style it somehow.
 */
export default class UI {
  /**
   * @param {{api: object}}  - Editor.js API
   */
  constructor({ api }) {
    this.api = api
    /**
     * Tag represented the term
     *
     * @type {string}
     */

    // current active tab
    this.activeTab = TAB.USER
    this.tabConfig = [
      {
        title: '用户',
        raw: TAB.USER,
      },
      {
        title: '帖子',
        raw: TAB.POST,
      },
    ]

    this.CSS = {
      //
      mention: CSS.mention,
      mentionContainer: 'cdx-mention__container',
      mentionInput: 'cdx-mention__input',
      mentionIntro: 'cdx-mention-suggestion__intro',
      mentionAvatar: 'cdx-mention-suggestion__avatar',
      mentionTitle: 'cdx-mention-suggestion__title',
      mentionDesc: 'cdx-mention-suggestion__desc',
      // tab
      tabWrapper: 'cdx-mention__tab',
      tabItem: 'cdx-mention__tab_item',
      tabItemActive: 'cdx-mention__tab_item_active',

      // suggestion
      suggestionContainer: 'cdx-mention-suggestion-wrapper',
      suggestion: 'cdx-mention-suggestion',
      // inline toolbar
      inlineToolBar: 'ce-inline-toolbar',
      inlineToolBarOpen: 'ce-inline-toolbar--showed',
    }

    this._initNodes()
  }

  /**
   * editor.js render actions
   *
   * @returns {HTMLElement}
   * @memberof Mention
   */
  renderActions() {
    return this.nodes.mention
  }

  /**
   * init html nodes for the tool
   *
   * @memberof UI
   */
  _initNodes() {
    this.nodes = {
      mention: make('div', this.CSS.mentionContainer),
      suggestions: make('div', this.CSS.suggestionContainer),
      tab: this._drawTab(),
      mentionInput: make('input', this.CSS.mentionInput, {
        autofocus: true,
      }),
    }

    this._initMentionInput()

    this.nodes.mention.appendChild(this.nodes.tab)
    this.nodes.mention.appendChild(this.nodes.mentionInput)
    this.nodes.mention.appendChild(this.nodes.suggestions)
  }

  /**
   * init the mention input for user or post etc..
   *
   * @memberof UI
   */
  _initMentionInput() {
    this.api.listeners.off(this.nodes.mentionInput, 'focus')
    this.api.listeners.off(this.nodes.mentionInput, 'keyup')

    this.api.listeners.on(this.nodes.mentionInput, 'focus', () => {
      const MentionEl = document.querySelector('#' + this.CSS.mention)

      if (MentionEl) {
        const MentionParentEl = MentionEl.parentNode

        // 防止重复插入 holder, 否则会导致多次聚焦后光标错位
        if (!MentionParentEl.querySelector(`.${CSS.focusHolder}`)) {
          const MentionCursorHolder = make('span', CSS.focusHolder)
          MentionParentEl.insertBefore(
            MentionCursorHolder,
            MentionEl.nextSibling,
          )
        }
      }
    })

    this.api.listeners.on(
      this.nodes.mentionInput,
      'keyup',
      debounce(this._handleInput.bind(this), 200),
    )
  }

  /**
   * handle mention type change
   * @param {string} tab - TAB.USER or TAB.POST
   * @memberof UI
   */
  _handleTabChange(tab) {
    if (this.activeTab === tab) return

    this.activeTab = tab

    const TabEl = this._drawTab()
    this.nodes.tab.replaceWith(TabEl)
    this.nodes.tab = TabEl

    // clear current input value and suggestions if need
    this._clearInputValue()
    this._clearSuggestions()

    setTimeout(() => this._applyInputStyle())
  }

  /**
   * draw tab for mention type
   * @return {HTMLElement}
   * @memberof UI
   */
  _drawTab() {
    const TabEl = make('div', this.CSS.tabWrapper)
    this.tabConfig.forEach((tabItem) => {
      const classList = [this.CSS.tabItem]
      if (tabItem.raw === this.activeTab) classList.push(this.CSS.tabItemActive)

      const TabItemEl = make('div', classList, {
        innerHTML: tabItem.title,
      })

      TabItemEl.addEventListener('click', () => {
        this._handleTabChange(tabItem.raw)
      })

      TabEl.appendChild(TabItemEl)
    })

    return TabEl
  }

  /**
   * show mention suggestions, hide normal actions like bold, italic etc...inline-toolbar buttons
   * 隐藏正常的 粗体，斜体等等 inline-toolbar 按钮，这里是借用了自带 popover 的一个 hack
   * @memberof UI
   */
  handleMentionActions() {
    keepCustomInlineToolOnly('mention')

    setTimeout(() => this.nodes.mentionInput.focus(), 100)
  }

  /**
   * handle mention input
   * @param {HTMLEVENT} - e
   * @return {void}
   */
  _handleInput(e) {
    if (e.code === 'Escape') return this._hideMentionPanel()

    if (e.code === 'Enter') {
      return console.log('select first item')
    }

    const suggestion = this._drawSuggestion(e.target.value)
    this.nodes.suggestions.appendChild(suggestion)
  }

  /**
   * generate suggestion block
   *
   * @return {HTMLElement}
   */
  _drawSuggestion(value) {
    // TODO: query the data
    const user = {
      id: 1,
      title: value,
      desc: '摩托旅行爱好者',
      avatar: 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/test.jpg',
    }

    const post = {
      id: 1,
      title: value,
      desc: '摩托旅行爱好者',
    }

    return this.activeTab === 'user'
      ? this._drawUserSuggestion(user)
      : this._drawPostSuggestion(post)
  }

  /**
   * draw suggestion for user
   *
   * @returns {HTMLElement}
   * @memberof UI
   */
  _drawUserSuggestion(user) {
    const MentionEl = document.querySelector('#' + this.CSS.mention)
    const WrapperEl = make('div', [this.CSS.suggestion], {})

    const AvatarEl = make('img', [this.CSS.mentionAvatar], {
      src: user.avatar,
    })

    const IntroEl = make('div', [this.CSS.mentionIntro], {})
    const TitleEl = make('div', [this.CSS.mentionTitle], {
      innerText: user.title,
    })
    const DescEl = make('div', [this.CSS.mentionDesc], {
      innerText: user.desc,
    })

    WrapperEl.appendChild(AvatarEl)
    IntroEl.appendChild(TitleEl)
    IntroEl.appendChild(DescEl)
    WrapperEl.appendChild(IntroEl)

    WrapperEl.addEventListener('click', () => {
      this.nodes.mentionInput.value = user.title
      MentionEl.innerHTML = `${user.title} `
      MentionEl.setAttribute('data-sign', '@')

      setTimeout(() => this._hideMentionPanel())
    })

    return WrapperEl
  }

  /**
   * draw suggestion for user
   *
   * @returns {HTMLElement}
   * @memberof UI
   */
  _drawPostSuggestion(post) {
    const MentionEl = document.querySelector('#' + this.CSS.mention)
    const WrapperEl = make('div', [this.CSS.suggestion], {})

    const IntroEl = make('div', [this.CSS.mentionIntro], {})
    const TitleEl = make('div', [this.CSS.mentionTitle], {
      innerText: post.title,
    })
    const DescEl = make('div', [this.CSS.mentionDesc], {
      innerText: post.desc,
    })

    IntroEl.appendChild(TitleEl)
    IntroEl.appendChild(DescEl)
    WrapperEl.appendChild(IntroEl)

    WrapperEl.addEventListener('click', () => {
      this.nodes.mentionInput.value = post.title
      MentionEl.innerHTML = `${post.title} `

      MentionEl.setAttribute('data-sign', '#')

      setTimeout(() => this._hideMentionPanel())
    })

    return WrapperEl
  }

  /**
   * different input style for each tab
   *
   * @memberof UI
   */
  _applyInputStyle() {
    switch (this.activeTab) {
      case TAB.POST: {
        this.nodes.mentionInput.style.width = '280px'
        this.nodes.mentionInput.placeholder = '文章标题'
        break
      }

      default: {
        this.nodes.mentionInput.style.width = '180px'
        this.nodes.mentionInput.placeholder = '你想 @ 谁?'
        break
      }
    }
    this.nodes.mentionInput.focus()
  }

  // clear suggestions list
  _clearSuggestions() {
    const node = document.querySelector('.' + this.CSS.suggestionContainer)

    while (node.firstChild) {
      node.removeChild(node.firstChild)
    }
  }

  /**
   * close the mention popover, then focus to mention holder and clean up
   *
   * @return {void}
   */
  _hideMentionPanel() {
    const mentionEl = document.querySelector('#' + this.CSS.mention)
    if (!mentionEl) return

    // clear input
    this._clearInputValue()

    // empty the mention input
    this._clearSuggestions()

    // closePopover
    const inlineToolBar = document.querySelector('.' + this.CSS.inlineToolBar)
    // this.api.toolbar.close is not work
    // so close the toolbar by remove the open class manually
    // this.api.toolbar.close()
    inlineToolBar.classList.remove(this.CSS.inlineToolBarOpen)

    // move caret to end of the current mention
    if (mentionEl.nextElementSibling) {
      moveCaretToEnd(mentionEl.nextElementSibling)
    }

    // mention holder id should be uniq
    // 在 moveCaret 定位以后才可以删除，否则定位会失败
    setTimeout(() => {
      this._removeAllHolderIds()
      removeElementByClass(CSS.focusHolder)
      if (mentionEl.innerHTML === '&nbsp;') {
        convertElementToText(mentionEl, true)
      }
    })
  }

  /**
   * remove all the mention-holder id
   * 删除所有 mention-holder 的 id， 因为 closePopover 后无法处理失焦后自动隐藏的情况
   * @returns {void}
   * @memberof UI
   */
  _removeAllHolderIds() {
    const holders = document.querySelectorAll('.' + this.CSS.mention)

    holders.forEach((item) => item.removeAttribute('id'))
  }

  /**
   * clear mention input value
   *
   * @memberof UI
   */
  _clearInputValue() {
    this.nodes.mentionInput.value = ''
  }

  /**
   * clear suggestions list
   *
   * @memberof UI
   */
  _clearSuggestions() {
    const node = document.querySelector('.' + this.CSS.suggestionContainer)

    while (node.firstChild) {
      node.removeChild(node.firstChild)
    }
  }

  /**
   * hide mention panel after popover closed
   * @see @link https://editorjs.io/inline-tools-api-1#clear
   * @memberof Mention
   */
  clear() {
    /**
     * should clear anchors after user manually click outside the popover,
     * otherwise will confuse the next insert
     *
     * 用户手动点击其他位置造成失焦以后，如果没有输入的话需要清理 anchors，
     * 否则会造成下次插入 mention 的时候定位异常
     *
     */
    setTimeout(() => this._hideMentionPanel())
  }
}
