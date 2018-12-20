import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "nationalcode"
})
export class NationalCodePipe implements PipeTransform {
    transform(value: number, code: string): string {
        switch (code) {
            case "US":
                return "+1 " + value;
            case "AUS":
                return "+31 " + value;
            default:
                return "+91 " + value;
        }

    }
}