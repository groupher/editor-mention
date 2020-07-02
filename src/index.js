import {
  make,
  debounce,
  CSS,
  INLINE_BLOCK_TAG,
  moveCaretToEnd,
  keepCustomInlineToolOnly,
  restoreDefaultInlineTools,
} from '@groupher/editor-utils'
import './index.css'

/**
 * Mention Tool for the Editor.js
 *
 * Allows to wrap inline fragment and style it somehow.
 */
export default class Mention {
  /**
   * Specifies Tool as Inline Toolbar Tool
   *
   * @return {boolean}
   */
  static get isInline() {
    return true
  }

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

    this.CSS = {
      mention: CSS.mention,
      mentionToolbarBlock: 'cdx-mention-toolbar-block',
      mentionContainer: 'cdx-mention__container',
      mentionInput: 'cdx-mention__input',
      mentionIntro: 'cdx-mention-suggestion__intro',
      mentionAvatar: 'cdx-mention-suggestion__avatar',
      mentionTitle: 'cdx-mention-suggestion__title',
      mentionDesc: 'cdx-mention-suggestion__desc',
      suggestionContainer: 'cdx-mention-suggestion-container',
      suggestion: 'cdx-mention-suggestion',
      inlineToolBar: 'ce-inline-toolbar',
      inlineToolBarOpen: 'ce-inline-toolbar--showed',
      inlineToolbarButtons: 'ce-inline-toolbar__buttons',
    }

    /**
     * CSS classes
     */
    this.iconClasses = {
      base: this.api.styles.inlineToolButton,
      active: this.api.styles.inlineToolButtonActive,
    }

    this.mentionContainer = make('div', [this.CSS.mentionContainer], {})
    this.suggestionContainer = make('div', [this.CSS.suggestionContainer], {})

    this.mentionInput = make('input', [this.CSS.mentionInput], {
      innerHTML: '你想 @ 谁?',
      autofocus: true,
    })

    this.mentionInput.addEventListener('focus', () => {
      const mention = document.querySelector('#' + this.CSS.mention)
      console.log('focused', mention)

      if (mention) {
        const mentionCursorHolder = make('span', CSS.focusHolder)
        mention.parentNode.insertBefore(
          mentionCursorHolder,
          mention.nextSibling,
        )
      }
    })
    /**
     * should clear anchors after user manually click outside the popover,
     * otherwise will confuse the next insert
     *
     * 用户手动点击其他位置造成失焦以后，如果没有输入的话需要清理 anchors，
     * 否则会造成下次插入 mention 的时候定位异常
     *
     * @return {void}
     */
    this.mentionInput.addEventListener('blur', () => {
      this.selectionStateChecked = false
      if (this.mentionInput.value.trim() === '') {
        setTimeout(() => {
          // this.removeAllHolderIds()
          this.closePopover()
        }, 50)
      }
    })
    this.selectionStateChecked = false

    this.mentionContainer.appendChild(this.mentionInput)
    this.mentionContainer.appendChild(this.suggestionContainer)

    this.mentionInput.addEventListener(
      'keyup',
      debounce(this.handleMentionInput.bind(this), 300),
    )
  }

  /**
   * handle mention input
   *
   * @return {void}
   */
  handleMentionInput(ev) {
    if (ev.code === 'Escape') return this.closePopover()
    if (ev.code === 'Enter') return console.log('select first item')

    const user = {
      id: 1,
      title: 'mydaerxym',
      desc: 'author of the ..',
      avatar: 'https://avatars0.githubusercontent.com/u/6184465?s=40&v=4',
    }

    const suggestion = this.makeSuggestion(user)

    this.suggestionContainer.appendChild(suggestion)
  }

  /**
   * generate suggestion block
   *
   * @return {HTMLElement}
   */
  makeSuggestion(user) {
    const mention = document.querySelector('#' + this.CSS.mention)
    const suggestionWrapper = make('div', [this.CSS.suggestion], {})

    const avatar = make('img', [this.CSS.mentionAvatar], {
      src: user.avatar,
    })

    const intro = make('div', [this.CSS.mentionIntro], {})
    const title = make('div', [this.CSS.mentionTitle], {
      innerText: user.title,
    })
    const desc = make('div', [this.CSS.mentionDesc], {
      innerText: user.desc,
    })

    suggestionWrapper.appendChild(avatar)
    intro.appendChild(title)
    intro.appendChild(desc)
    suggestionWrapper.appendChild(intro)

    suggestionWrapper.addEventListener('click', () => {
      this.mentionInput.value = user.title
      mention.innerHTML = user.title
      // const mentionCursorHolder = make('span', CSS.focusHolder)
      // mention.parentNode.insertBefore(mentionCursorHolder, mention.nextSibling)
      mention.contenteditable = true
      this.closePopover()
    })

    // https://avatars0.githubusercontent.com/u/6184465?s=40&v=4

    return suggestionWrapper
  }

  /**
   * close the mention popover, then focus to mention holder
   *
   * @return {void}
   */
  closePopover() {
    const mention = document.querySelector('#' + this.CSS.mention)
    if (!mention) return
    // empty the mention input
    this.mentionInput.value = ''
    this.clearSuggestions()

    const inlineToolBar = document.querySelector('.' + this.CSS.inlineToolBar)

    // this.api.toolbar.close is not work
    // so close the toolbar by remove the optn class mannully
    // this.api.toolbar.close()
    inlineToolBar.classList.remove(this.CSS.inlineToolBarOpen)

    if (mention.nextElementSibling) moveCaretToEnd(mention.nextElementSibling)

    // mention holder id should be uniq
    // 在 moveCaret 定位以后才可以删除，否则定位会失败
    setTimeout(() => {
      this.removeAllHolderIds()
      document.querySelector(`.${CSS.focusHolder}`).remove()
    }, 50)
  }

  /**
   * Create button element for Toolbar
   * @ should not visible in toolbar, so return an empty div
   * @return {HTMLElement}
   */
  render() {
    const emptyDiv = make('div', [this.CSS.mentionToolbarBlock], {})

    return emptyDiv
  }

  /**
   * NOTE:  inline tool must have this method
   *
   * @param {Range} range - selected fragment
   */
  surround(range) {}

  setElementDisplayByClass(css, attr) {
    const el = document.querySelector(`.${css}`)
    if (el) {
      el.style.display = attr
    }
  }

  /**
   * Check and change Term's state for current selection
   */
  checkState(termTag) {
    if (!termTag || termTag.anchorNode.id !== CSS.mention) {
      this.selectionStateChecked = false
      return restoreDefaultInlineTools()
    }

    if (this.selectionStateChecked) return

    if (termTag.anchorNode.id === CSS.mention) {
      return this.handleMentionActions()
    }

    // normal inline tools
    this.selectionStateChecked = false
    return restoreDefaultInlineTools()
  }

  /**
   * show mention suggestions, hide normal actions like bold, italic etc...inline-toolbar buttons
   * 隐藏正常的 粗体，斜体等等 inline-toolbar 按钮，这里是借用了自带 popover 的一个 hack
   */
  handleMentionActions() {
    this.selectionStateChecked = true
    keepCustomInlineToolOnly('mention')

    this.clearSuggestions()
    this.mentionInput.value = ''

    setTimeout(() => {
      console.log('the fuck', this.mentionInput)
      this.mentionInput.focus()
    }, 100)
  }

  // clear suggestions list
  clearSuggestions() {
    console.log('clearSuggestions')
    const node = document.querySelector('.' + this.CSS.suggestionContainer)

    while (node.firstChild) {
      node.removeChild(node.firstChild)
    }
  }

  // 删除所有 mention-holder 的 id， 因为 closePopover 无法处理失焦后
  // 自动隐藏的情况
  removeAllHolderIds() {
    const holders = document.querySelectorAll('.' + this.CSS.mention)

    holders.forEach((item) => item.removeAttribute('id'))

    return false
  }

  renderActions() {
    this.mentionInput.placeholder = '你想 @ 谁?'

    return this.mentionContainer
  }

  /**
   * Sanitizer rule
   * @return {{mark: {class: string}}}
   */
  static get sanitize() {
    return {
      [INLINE_BLOCK_TAG.mention]: {
        class: CSS.mention,
      },
    }
  }
}
