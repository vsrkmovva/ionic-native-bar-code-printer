var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var BarCodePrinterOriginal = /** @class */ (function (_super) {
    __extends(BarCodePrinterOriginal, _super);
    function BarCodePrinterOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BarCodePrinterOriginal.prototype.getAllPrinters = function (names) { return cordova(this, "getAllPrinters", {}, arguments); };
    BarCodePrinterOriginal.prototype.getItemHorizontalAlignment = function (params) { return cordova(this, "getItemHorizontalAlignment", {}, arguments); };
    BarCodePrinterOriginal.prototype.startJob = function (params) { return cordova(this, "startJob", {}, arguments); };
    BarCodePrinterOriginal.prototype.drawBarcode = function (params) { return cordova(this, "drawBarcode", {}, arguments); };
    BarCodePrinterOriginal.prototype.commitJob = function (params) { return cordova(this, "commitJob", {}, arguments); };
    BarCodePrinterOriginal.prototype.drawText = function (params) { return cordova(this, "drawText", {}, arguments); };
    BarCodePrinterOriginal.prototype.openPrinter = function (params) { return cordova(this, "openPrinter", {}, arguments); };
    BarCodePrinterOriginal.prototype.closePrinter = function (params) { return cordova(this, "closePrinter", {}, arguments); };
    BarCodePrinterOriginal.pluginName = "BarCodePrinter";
    BarCodePrinterOriginal.plugin = "cordova-plugin-lpapi";
    BarCodePrinterOriginal.pluginRef = "LPAPIPlugin";
    BarCodePrinterOriginal.repo = "";
    BarCodePrinterOriginal.install = "";
    BarCodePrinterOriginal.installVariables = [];
    BarCodePrinterOriginal.platforms = ["Android", "iOS"];
    return BarCodePrinterOriginal;
}(IonicNativePlugin));
var BarCodePrinter = new BarCodePrinterOriginal();
export { BarCodePrinter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Jhci1jb2RlLXByaW50ZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVlBLE9BQU8sOEJBQTBGLE1BQU0sb0JBQW9CLENBQUM7O0lBa0N4RixrQ0FBaUI7Ozs7SUFVbkQsdUNBQWMsYUFBQyxLQUFVO0lBS3pCLG1EQUEwQixhQUFDLE1BQVc7SUFLdEMsaUNBQVEsYUFBQyxNQUFXO0lBS3BCLG9DQUFXLGFBQUMsTUFBVztJQUt2QixrQ0FBUyxhQUFDLE1BQVc7SUFLckIsaUNBQVEsYUFBQyxNQUFXO0lBS3BCLG9DQUFXLGFBQUMsTUFBVztJQUt2QixxQ0FBWSxhQUFDLE1BQVc7Ozs7Ozs7O3lCQTNGMUI7RUE4Q29DLGlCQUFpQjtTQUF4QyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIGEgdGVtcGxhdGUgZm9yIG5ldyBwbHVnaW4gd3JhcHBlcnNcbiAqXG4gKiBUT0RPOlxuICogLSBBZGQvQ2hhbmdlIGluZm9ybWF0aW9uIGJlbG93XG4gKiAtIERvY3VtZW50IHVzYWdlIChpbXBvcnRpbmcsIGV4ZWN1dGluZyBtYWluIGZ1bmN0aW9uYWxpdHkpXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXG4gKiAtIFJlbW92ZSBhbGwgdGhlIGNvbW1lbnRzIGluY2x1ZGVkIGluIHRoaXMgdGVtcGxhdGUsIEVYQ0VQVCB0aGUgQFBsdWdpbiB3cmFwcGVyIGRvY3MgYW5kIGFueSBvdGhlciBkb2NzIHlvdSBhZGRlZFxuICogLSBSZW1vdmUgdGhpcyBub3RlXG4gKlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQG5hbWUgQmFyIENvZGUgUHJpbnRlclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQmFyQ29kZVByaW50ZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2xwYXBpJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBiYXJDb2RlUHJpbnRlcjogQmFyQ29kZVByaW50ZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmJhckNvZGVQcmludGVyLmZ1bmN0aW9uTmFtZSgnSGVsbG8nLCAxMjMpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQmFyQ29kZVByaW50ZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1scGFwaScsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICdMUEFQSVBsdWdpbicsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJycsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBpbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhckNvZGVQcmludGVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGRvZXMgc29tZXRoaW5nXG4gICAqIEBwYXJhbSBuYW1lcyB7c3RyaW5nfSBQcmludGVyIG1vZGVsLFxuICAgICAqIEFuIGVtcHR5IHN0cmluZyBtZWFucyB0byByZXR1cm4gYWxsIG1vZGVscyBvZiBwcmludGVyc1xuICAgICAqIFRvIG9idGFpbiBtdWx0aXBsZSBtb2RlbHMgb2YgcHJpbnRlcnMsIHlvdSBjYW4gdXNlIFwiO1wiIHRvIHNwbGl0IGJldHdlZW4gbXVsdGlwbGUgbW9kZWxzOyAgIFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRBbGxQcmludGVycyhuYW1lczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBnZXRJdGVtSG9yaXpvbnRhbEFsaWdubWVudChwYXJhbXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnRKb2IocGFyYW1zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGRyYXdCYXJjb2RlKHBhcmFtczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBjb21taXRKb2IocGFyYW1zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGRyYXdUZXh0KHBhcmFtczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBvcGVuUHJpbnRlcihwYXJhbXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgY2xvc2VQcmludGVyKHBhcmFtczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG59XG4iXX0=