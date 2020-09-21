import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Bar Code Printer
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { BarCodePrinter } from '@ionic-native/bar-code-printer';
 *
 *
 * constructor(private barCodePrinter: BarCodePrinter) { }
 *
 * ...
 *
 *
 * this.barCodePrinter.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class BarCodePrinter extends IonicNativePlugin {
    /**
     * This function does something
     * @param names {string} Printer model,
       * An empty string means to return all models of printers
       * To obtain multiple models of printers, you can use ";" to split between multiple models;
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    getAllPrinters(names: any): Promise<any>;
}
