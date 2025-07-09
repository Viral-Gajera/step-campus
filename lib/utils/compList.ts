import { CheckboxComponent } from "@/components/componentUIList/CheckBoxComponent";
import { ButtonComponent } from "../../components/componentUIList/Button";
import { DropdownComponent } from "../../components/componentUIList/DropdownListComponent";
import {
    RadioComponent,
    RadioCode,
} from "../../components/componentUIList/RadioComponent";
import { Combobox } from "@/components/componentUIList/Combobox";
import { CheckboxDemo } from "@/components/componentUIList/Checkbox";
import { HideAndShow } from "@/components/componentUIList/HideAndShow";
import { SwitchTab } from "@/components/componentUIList/SwitchTab";
import { SwitchWindow } from "@/components/componentUIList/SwitchWindow";
import { Alert } from "@/components/componentUIList/Alert";
import { Confirm } from "@/components/componentUIList/Confirm";
import { TableDemo } from "@/components/componentUIList/Table";
import { Iframe } from "@/components/componentUIList/Iframe";
import { HorizontalScroll } from "@/components/componentUIList/HorizontalScroll";
import { NestedFrame } from "@/components/componentUIList/NestedFrame";
import { VerticalScroll } from "@/components/componentUIList/VerticalScroll";
import { FileDownload } from "@/components/componentUIList/FileDownload";
import { DatePicker } from "@/components/componentUIList/DatePicker";
import { DragAndDrop } from "@/components/componentUIList/DragAndDrop";
import { FileUpload } from "@/components/componentUIList/FileUpload";
import { Wait } from "@/components/componentUIList/Wait";
import { FileRename } from "@/components/componentUIList/FileRename";
import { ToggleButton } from "@/components/componentUIList/ToggleButton";
import { KeyBoardActions } from "@/components/componentUIList/KeyBoardActions";
import { SearchButton } from "@/components/componentUIList/SearchButton";

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
        component: DropdownComponent,
        description:
            "A dropdown is a UI element that allows users to select one (or sometimes multiple) options from a list. In HTML, dropdowns are typically implemented using the <select> tag with nested <option> tags.",
    },
    {
        title: "Suggestive Dropdown",
        component: Combobox,
        description:
            "An auto-suggestive dropdown (also known as an autocomplete dropdown) is a UI element where suggestions appear dynamically as the user types into an input field. These are not standard <select> elements, so Selenium handles them differently—usually by interacting with the input field and then selecting from the dynamically generated list.",
    },
    {
        title: "Checkboxes",
        component: CheckboxDemo,
        description:
            "A checkbox is a web element that allows users to select one or more options from a set. It is represented in HTML using the <input type='checkbox'> tag.",
    },
    {
        title: "Switch Tab",
        component: SwitchTab,
        description:
            "The action of changing focus from one browser tab to another using Selenium or browser controls.",
    },
    {
        title: "Switch Window",
        component: SwitchWindow,
        description:
            "Switch Window in Selenium refers to the process of changing the driver's focus from one browser window to another when multiple windows are open.",
    },
    {
        title: "Alert",
        component: Alert,
        description:
            "An alert is a pop-up message box that appears in the browser to give information to the user. It is created using JavaScript and is commonly used for warnings, confirmations, or simple notifications.",
    },
    {
        title: "Confirm",
        component: Confirm,
        description:
            "A confirm() dialog in JavaScript is used to ask the user to confirm or cancel an action. It displays a message with 'OK' and 'Cancel' buttons and returns a Boolean value.",
    },
    {
        title: "Hide And Show Element",
        component: HideAndShow,
        description:
            "This web element tells us whether the element is visible or not.",
    },
    {
        title: "Web table",
        component: TableDemo,
        description:
            "tables allow web developers to arrange data into rows and columns.",
    },
    {
        title: "Frame",
        component: Iframe,
        description:
            "An inline frame (iframe) HTML element is used to embed another document within the current HTML document.",
    },
    {
        title: "Nested Frame",
        component: NestedFrame,
        description:
            "An inline frame (iframe) HTML element is used to embed another document within the current HTML document.",
    },
    {
        title: "Horizontal Scroll",
        component: HorizontalScroll,
        description:
            "Horizontal scrolling refers to the ability to navigate content left and right on a screen, typically when the content is wider than the display area.",
    },
    {
        title: "Vertical Scroll",
        component: VerticalScroll,
        description:
            "A vertical scroll bar is a graphical control element that allows users to navigate a document, webpage, or other content that is too large to fit within the currently visible area, specifically by moving the content up and down.",
    },
    {
        title: "Login",
        component: RadioComponent,
        description:
            "A login form is a user interface element, typically found on websites and applications, that allows registered users to access a protected system by verifying their identity. It usually requires users to input their username (or email) and password, and sometimes other authentication factors, to confirm they are who they claim to be. ",
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
        component: KeyBoardActions,
    },
    {
        title: "List",
        component: RadioComponent,
    },
    {
        title: "File Upload",
        component: FileUpload,
    },
    {
        title: "File Download",
        component: FileDownload,
    },
    {
        title: "Date Picker",
        component: DatePicker,
    },
    {
        title: "Full Page Scroll",
        component: VerticalScroll,
    },
    {
        title: "Drag and Drop",
        component: DragAndDrop,
    },
    {
        title: "Validate Css Property",
        component: RadioComponent,
    },
    {
        title: "Wait",
        component: Wait,
    },
    {
        title: "File Rename",
        component: FileRename,
    },
    {
        title: "Toggle button",
        component: ToggleButton,
    },
    {
        title: "Search Button",
        component: SearchButton,
    },
    {
        title: "Another Component",
        component: RadioComponent,
    },
];

componentList = componentList.map((item: any) => {
    return {
        ...item,
        url: item.title.toLowerCase().replaceAll(" ", "-"),
    };
});

export default componentList;
