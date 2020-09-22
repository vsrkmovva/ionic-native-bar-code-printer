import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Bar Code Printer
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { BarCodePrinter } from '@ionic-native/lpapi';
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
export declare class BarCodePrinterOriginal extends IonicNativePlugin {
    /**
     * This function does something
     * @param names {string} Printer model,
       * An empty string means to return all models of printers
       * To obtain multiple models of printers, you can use ";" to split between multiple models;
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    getAllPrinters(names: any): Promise<any>;
    getItemHorizontalAlignment(params: any): Promise<any>;
    startJob(params: any): Promise<any>;
    drawBarcode(params: any): Promise<any>;
    commitJob(params: any): Promise<any>;
    drawText(params: any): Promise<any>;
    openPrinter(params: any): Promise<any>;
    closePrinter(params: any): Promise<any>;
}

export declare const BarCodePrinter: BarCodePrinterOriginal;