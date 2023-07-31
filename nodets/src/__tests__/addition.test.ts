import { addition } from "../addition";


describe('Addition Unit Tests', () => {
    test('Standard addition - positive + positive', () => {
        const var1 = 1;
        const var2 = 2;
        const result = addition(var1,var2);
        expect(result).toEqual(var1+var2)
    });

    test('Standard addition - negative + positive', () => {
        const var1 = 1;
        const var2 = -2;
        const result = addition(var1,var2);
        expect(result).toEqual(var1+var2)
    });

    test('Standard addition - decimals', () => {
        const var1 = 1.22;
        const var2 = 22;
        const result = addition(var1,var2);
        expect(result).toEqual(var1+var2)
    });
}); 