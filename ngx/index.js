import { __decorate, __extends } from "tslib";
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var BarCodePrinter = /** @class */ (function (_super) {
    __extends(BarCodePrinter, _super);
    function BarCodePrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BarCodePrinter.prototype.getAllPrinters = function (names) { return cordova(this, "getAllPrinters", {}, arguments); };
    BarCodePrinter.prototype.getItemHorizontalAlignment = function (params) { return cordova(this, "getItemHorizontalAlignment", {}, arguments); };
    BarCodePrinter.prototype.startJob = function (params) { return cordova(this, "startJob", {}, arguments); };
    BarCodePrinter.prototype.drawBarcode = function (params) { return cordova(this, "drawBarcode", {}, arguments); };
    BarCodePrinter.prototype.commitJob = function (params) { return cordova(this, "commitJob", {}, arguments); };
    BarCodePrinter.prototype.drawText = function (params) { return cordova(this, "drawText", {}, arguments); };
    BarCodePrinter.prototype.openPrinter = function (params) { return cordova(this, "openPrinter", {}, arguments); };
    BarCodePrinter.prototype.closePrinter = function (params) { return cordova(this, "closePrinter", {}, arguments); };
    BarCodePrinter.pluginName = "BarCodePrinter";
    BarCodePrinter.plugin = "cordova-plugin-lpapi";
    BarCodePrinter.pluginRef = "LPAPIPlugin";
    BarCodePrinter.repo = "";
    BarCodePrinter.install = "";
    BarCodePrinter.installVariables = [];
    BarCodePrinter.platforms = ["Android", "iOS"];
    BarCodePrinter = __decorate([
        Injectable()
    ], BarCodePrinter);
    return BarCodePrinter;
}(IonicNativePlugin));
export { BarCodePrinter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Jhci1jb2RlLXByaW50ZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7OztHQVVHO0FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUEwRixNQUFNLG9CQUFvQixDQUFDOztJQWtDeEYsa0NBQWlCOzs7O0lBVW5ELHVDQUFjLGFBQUMsS0FBVTtJQUt6QixtREFBMEIsYUFBQyxNQUFXO0lBS3RDLGlDQUFRLGFBQUMsTUFBVztJQUtwQixvQ0FBVyxhQUFDLE1BQVc7SUFLdkIsa0NBQVMsYUFBQyxNQUFXO0lBS3JCLGlDQUFRLGFBQUMsTUFBVztJQUtwQixvQ0FBVyxhQUFDLE1BQVc7SUFLdkIscUNBQVksYUFBQyxNQUFXOzs7Ozs7OztJQTdDYixjQUFjO1FBRDFCLFVBQVUsRUFBRTtPQUNBLGNBQWM7eUJBOUMzQjtFQThDb0MsaUJBQWlCO1NBQXhDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xuICpcbiAqIFRPRE86XG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcbiAqIC0gUmVtb3ZlIGFueSBpbXBvcnRzIHRoYXQgeW91IGFyZSBub3QgdXNpbmdcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcbiAqXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBCYXIgQ29kZSBQcmludGVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBCYXJDb2RlUHJpbnRlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbHBhcGknO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhckNvZGVQcmludGVyOiBCYXJDb2RlUHJpbnRlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuYmFyQ29kZVByaW50ZXIuZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCYXJDb2RlUHJpbnRlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWxwYXBpJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gIHBsdWdpblJlZjogJ0xQQVBJUGx1Z2luJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmFyQ29kZVByaW50ZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gZG9lcyBzb21ldGhpbmdcbiAgICogQHBhcmFtIG5hbWVzIHtzdHJpbmd9IFByaW50ZXIgbW9kZWwsXG4gICAgICogQW4gZW1wdHkgc3RyaW5nIG1lYW5zIHRvIHJldHVybiBhbGwgbW9kZWxzIG9mIHByaW50ZXJzXG4gICAgICogVG8gb2J0YWluIG11bHRpcGxlIG1vZGVscyBvZiBwcmludGVycywgeW91IGNhbiB1c2UgXCI7XCIgdG8gc3BsaXQgYmV0d2VlbiBtdWx0aXBsZSBtb2RlbHM7ICAgXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEFsbFByaW50ZXJzKG5hbWVzOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGdldEl0ZW1Ib3Jpem9udGFsQWxpZ25tZW50KHBhcmFtczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBzdGFydEpvYihwYXJhbXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZHJhd0JhcmNvZGUocGFyYW1zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGNvbW1pdEpvYihwYXJhbXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgZHJhd1RleHQocGFyYW1zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICBAQ29yZG92YSgpXG4gIG9wZW5QcmludGVyKHBhcmFtczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBjbG9zZVByaW50ZXIocGFyYW1zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cbn1cbiJdfQ==