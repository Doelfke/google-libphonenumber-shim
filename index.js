import isMobilePhone from 'validator/lib/isMobilePhone'

const PhoneNumberUtil = {
    getInstance() {
        return {
            parseAndKeepRawInput(val) {
                return val
            },
            isValidNumber(phoneNum) {
                return isMobilePhone(phoneNum)
            }
        }
    }
}

export { PhoneNumberUtil }