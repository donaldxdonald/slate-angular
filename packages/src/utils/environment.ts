export const IS_IOS =
    typeof navigator !== 'undefined' &&
    typeof window !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent) &&
    !(window as any).MSStream;

export const IS_APPLE =
    typeof navigator !== 'undefined' && /Mac OS X/.test(navigator.userAgent);

export const IS_ANDROID =
    typeof navigator !== 'undefined' && /Android/.test(navigator.userAgent)

export const IS_FIREFOX =
    typeof navigator !== 'undefined' &&
    /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);

export const IS_SAFARI =
    typeof navigator !== 'undefined' &&
    /Version\/[\d\.]+.*Safari/.test(navigator.userAgent);

// "modern" Edge was released at 79.x
export const IS_EDGE_LEGACY =
    typeof navigator !== 'undefined' &&
    /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent);

export const IS_CHROME =
    typeof navigator !== 'undefined' && /Chrome/i.test(navigator.userAgent);

// Native beforeInput events don't work well with react on Chrome 75 and older, Chrome 76+ can use beforeInput
export const IS_CHROME_LEGACY =
    typeof navigator !== 'undefined' && 
    /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])/i.test(navigator.userAgent) &&
    // Exclude Chrome version greater than 3 bits，Chrome releases v100 on 2022.03.29
    !/Chrome?\/(?:\d{3,})/i.test(navigator.userAgent); 


// Firefox did not support `beforeInput` until `v87`.
export const IS_FIREFOX_LEGACY =
    typeof navigator !== 'undefined' &&
    /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(
        navigator.userAgent
    );

// qq browser
export const IS_QQBROWSER =
    typeof navigator !== 'undefined' && /.*QQBrowser/.test(navigator.userAgent);

// UC mobile browser
export const IS_UC_MOBILE =
    typeof navigator !== 'undefined' && /.*UCBrowser/.test(navigator.userAgent);

// Wechat browser
export const IS_WECHATBROWSER =
    typeof navigator !== 'undefined' && /.*Wechat/.test(navigator.userAgent);

// COMPAT: Firefox/Edge Legacy don't support the `beforeinput` event
// Chrome Legacy doesn't support `beforeinput` correctly
export const HAS_BEFORE_INPUT_SUPPORT =
    !IS_CHROME_LEGACY &&
    !IS_EDGE_LEGACY &&
    // globalThis is undefined in older browsers
    typeof globalThis !== 'undefined' &&
    globalThis.InputEvent &&
    // @ts-ignore The `getTargetRanges` property isn't recognized.
    typeof globalThis.InputEvent.prototype.getTargetRanges === 'function'