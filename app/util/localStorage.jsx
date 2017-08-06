export default {
    getItem: key => {
        let value;
        try {
            value = localStorage.getItem(key)
        } catch (ex) {
            // 开发环境下提示error
            if (__DEV__) {
                console.error('localStorage.getItem报错, ', ex.message)
            }
        }
        return value;
    },
    setItem: (key, value) => {
        try {
            // ios safari 无痕模式下，直接使用 localStorage.setItem 会报错
            localStorage.setItem(key, value)
        } catch (ex) {
            // 开发环境下提示 error
            /*global __DEV__*/
            if (__DEV__) {
                console.error('localStorage.setItem报错, ', ex.message)
            }
        }
    }
}