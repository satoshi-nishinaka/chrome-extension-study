import * as Storage from "./Storage"
// @ponicode
describe("readValues", () => {
    let inst: any

    beforeEach(() => {
        inst = new Storage.Storage()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.readValues(() => undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("saveValues", () => {
    let inst: any

    beforeEach(() => {
        inst = new Storage.Storage()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.saveValues()
        }
    
        expect(callFunction).not.toThrow()
    })
})
