import { CheckboxComponent } from "@/components/componentUIList/CheckBoxComponent";
import { ButtonComponent } from "../../components/componentUIList/Button";
import { DropdwonComponent } from "../../components/componentUIList/DropdownListComponent";
import {
    RadioComponent,
    RadioCode,
} from "../../components/componentUIList/RadioComponent";

let componentList: any = [
    {
        title: "Radio Button",
        component: RadioComponent,
        code: RadioCode,
        description:
            "A radio button is a type of web element that allows users to select only one option from a group of choices.",
    },
    {
        title: "Dropdown",
        component: RadioComponent,
    },
    {
        title: "Suggestive Dropdown",
        component: RadioComponent,
    },
    {
        title: "CheckBoxes",
        component: RadioComponent,
    },
    {
        title: "Switch Tab",
        component: RadioComponent,
    },
    {
        title: "Switch Window",
        component: RadioComponent,
    },
    {
        title: "Alert",
        component: RadioComponent,
    },
    {
        title: "Confirm",
        component: RadioComponent,
    },
    {
        title: "Hide and show button",
        component: RadioComponent,
    },
    {
        title: "Checkbox",
        component: RadioComponent,
    },
    {
        title: "Web table",
        component: RadioComponent,
    },
    {
        title: "Frame",
        component: RadioComponent,
    },
    {
        title: "Horizontal Scroll",
        component: RadioComponent,
    },
    {
        title: "Vertical Scroll",
        component: RadioComponent,
    },
    {
        title: "Login",
        component: RadioComponent,
    },
    {
        title: "Sign Up",
        component: RadioComponent,
    },
    {
        title: "Mouse Over",
        component: RadioComponent,
    },
    {
        title: "Keyboard Actions",
        component: RadioComponent,
    },
    {
        title: "List",
        component: RadioComponent,
    },
    {
        title: "File Upload",
        component: RadioComponent,
    },
    {
        title: "File Download",
        component: RadioComponent,
    },
    {
        title: "Date Picker",
        component: RadioComponent,
    },
    {
        title: "Full Page Scroll",
        component: RadioComponent,
    },
    {
        title: "Drag and Drop",
        component: RadioComponent,
    },
    {
        title: "Validate Css Property",
        component: RadioComponent,
    },
    {
        title: "Wait",
        component: RadioComponent,
    },
    {
        title: "File Rename",
        component: RadioComponent,
    },
    {
        title: "Toggle button",
        component: RadioComponent,
    },
    {
        title: "Search Button",
        component: RadioComponent,
    },
];

componentList = componentList.map((item: any) => {
    return {
        ...item,
        url: item.title.toLowerCase().replace(" ", "-"),
    };
});

export default componentList;
