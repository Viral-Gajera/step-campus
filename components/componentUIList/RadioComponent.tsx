import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const RadioComponent = () => {
    return (
        <RadioGroup defaultValue="comfortable" id="step-campus-radio-button">
            <div>Select Your Gender?</div>
            <div className="flex items-center gap-3">
                <RadioGroupItem
                    value="Male"
                    id="male"
                    className="cursor-pointer border-1 border-gray-400"
                />
                <Label htmlFor="male" className="cursor-pointer">
                    Male
                </Label>
            </div>
            <div className="flex items-center gap-3">
                <RadioGroupItem
                    value="female"
                    id="female"
                    className="cursor-pointer border-1 border-gray-400"
                />
                <Label htmlFor="female" className="cursor-pointer">
                    Female
                </Label>
            </div>
            <div className="flex items-center gap-3">
                <RadioGroupItem
                    value="other"
                    id="other"
                    className="cursor-pointer border-1 border-gray-400"
                />
                <Label htmlFor="other" className="cursor-pointer">
                    Other
                </Label>
            </div>
        </RadioGroup>
    );
};

export const RadioCode = `<input type="radio" value="default" id="radio-btn" />
<input type="radio" value="comfortable" id="radio-btn" />
<input type="radio" value="compact" id="radio-btn" />`;
