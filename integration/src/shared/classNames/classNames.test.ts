import { classNames } from "./classNames"

describe('classnames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass')
    })
    test('with additional class', () => {
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe('someClass class1 class2')
    })
    test('with mods', () => {
        expect(classNames('someClass', {hovered: true, scrollable: false, touchable: undefined}, ['class1', 'class2'])).toBe('someClass class1 class2 hovered')
    })
})