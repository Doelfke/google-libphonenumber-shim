import isMobilePhone from 'validator/lib/isMobilePhone'

const PhoneNumberUtil = {
    getInstance() {
        var local = ''
        return {
            parseAndKeepRawInput(val, local) {
                local = local
                return val
            },
            isValidNumber(phoneNum) {
                return isMobilePhone(phoneNum, local)
            }
        }
    }
}

export { PhoneNumberUtil }