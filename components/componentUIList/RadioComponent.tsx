import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const RadioComponent = () => {
    return (
        <RadioGroup defaultValue="comfortable" id="step-campus-radio-button">
            <div>Select Your Gender?</div>
            <div className="flex items-center gap-3">
                <RadioGroupItem
                    value="default"
                    id="r1"
                    className="cursor-pointer"
                />
                <Label htmlFor="r1" className="cursor-pointer">
                    Male
                </Label>
            </div>
            <div className="flex items-center gap-3">
                <RadioGroupItem
                    value="comfortable"
                    id="r2"
                    className="cursor-pointer"
                />
                <Label htmlFor="r2" className="cursor-pointer">
                    Female
                </Label>
            </div>
            <div className="flex items-center gap-3">
                <RadioGroupItem
                    value="compact"
                    id="r3"
                    className="cursor-pointer"
                />
                <Label htmlFor="r3" className="cursor-pointer">
                    Other
                </Label>
            </div>
        </RadioGroup>
    );
};

export const RadioCode = `<input type="radio" value="default" id="radio-btn" />
<input type="radio" value="comfortable" id="radio-btn" />
<input type="radio" value="compact" id="radio-btn" />`;
