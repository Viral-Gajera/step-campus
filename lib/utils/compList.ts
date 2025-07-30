import { CheckboxComponent } from "@/components/componentUIList/CheckBoxComponent";
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
import { LoginForm } from "@/components/componentUIList/LoginForm";
import { MouseOver } from "@/components/componentUIList/MouseOver";
import { List } from "@/components/componentUIList/List";
import { ValidateCss } from "@/components/componentUIList/ValidateCss";
import { AnotherComponent } from "@/components/componentUIList/AnotherComponent";
import { SignupForm } from "@/components/componentUIList/SignupForm";

let componentList: any = [
    {
        title: "Radio Button",
        component: RadioComponent,
        code: RadioCode,
        description: {
            content: "A radio button is a type of web element that allows users to select only one option from a group of choices.",
            customClass: "font-bold",
            pattern: "only one option",
            token: "only one option",
        }
           
    },
    {
        title: "Dropdown",
        component: DropdownComponent,
        description: {
            content: "A dropdown is a UI element that allows users to select one or sometimes multiple options from a list. In HTML, dropdowns are typically implemented using the <select> tag with nested <option> tags.",
            pattern: "select one or sometimes multiple",
            token: "select one or sometimes multiple",
            customClass: "font-bold",
        }
           
    },
    {
        title: "Suggestive Dropdown",
        component: Combobox,
        description: {
            content: "An auto-suggestive dropdown (also known as an autocomplete dropdown) is a UI element where suggestions appear dynamically as the user types into an input field. These are not standard <select> elements, so Selenium handles them differently—usually by interacting with the input field and then selecting from the dynamically generated list.",
            pattern: "",
            customClass: "font-bold",
        }
          
    },
    {
        title: "Checkboxes",
        component: CheckboxDemo,
        description: {
            content: "A checkbox is a web element that allows users to select one or more options from a set. It is represented in HTML using the <input type='checkbox'> tag.",
            pattern: "one or more options",
            token: "one or more options",
            customClass: "font-bold",
        }
            
    },
    {
        title: "Switch Tab",
        component: SwitchTab,
        description: {
            content:  "The action of changing focus from one browser tab to another.",
            pattern: "",
            customClass: "font-bold",
        }
           
    },
    {
        title: "Switch Window",
        component: SwitchWindow,
        description: {
            content:  "Switch Window in Selenium refers to the process of changing the driver's focus from one browser window to another when multiple windows are open.",
            pattern: "",
            customClass: "font-bold",
        }
           
    },
    {
        title: "Alert",
        component: Alert,
        description: {
            content: "An alert is a pop-up message box that appears in the browser to give information to the user. It is created using JavaScript and is commonly used for warnings, confirmations, or simple notifications.",
            pattern: "",
            customClass: "font-bold",
        }
            
    },
    {
        title: "Confirm",
        component: Confirm,
        description: {
            content: "A confirm() dialog in JavaScript is used to ask the user to confirm or cancel an action. It displays a message with 'OK' and 'Cancel' buttons and returns a Boolean value.",
            pattern: "",
            customClass: "font-bold",
        }
            
    },
    {
        title: "Hide And Show Element",
        component: HideAndShow,
        description: {
            content: "This web element tells us whether the element is visible or not.",
            pattern: "",
            customClass: "font-bold",
        }
            
    },
    {
        title: "Web table",
        component: TableDemo,
        description: {
            content: "In Selenium ,web tables are handled using standard XPath or CSS selectors. A web table in HTML is structured using <table>,<tr>(table rows), and <td> or <th> (table data or headers)",
            pattern: "CSS|XPath|web tables|selectors",
            customClass: "font-bold",
            token:["CSS","XPath","web tables","selectors"]
        }
            
    },
    {
        title: "Frame",
        component: Iframe,
        description: {
            content:"An inline frame (iframe) HTML element is used to embed another document within the current HTML document.",
            pattern: "",
            customClass: "font-bold",
        }
            
    },
    {
        title: "Nested Frame",
        component: NestedFrame,
        description: {
            content: "A nested frame means a frame (or iframe) inside another frame. To interact with elements inside such frames using Selenium Java, you must switch to each frame step by step.",
            pattern: "nested frame|inside another frame|Selenium Java|switch",
            token: ["nested frame","inside another frame","Selenium Java","switch"],
            customClass: "font-bold",
        }
            
    },
    {
        title: "Horizontal Scroll",
        component: HorizontalScroll,
        description: {
            content: "Horizontal scrolling refers to the ability to navigate content left and right on a screen, typically when the content is wider than the display area.",
            pattern: "",
            customClass: "font-bold",
        }
            
    },
    {
        title: "Vertical Scroll",
        component: VerticalScroll,
        description: {
            content: "A vertical scroll bar is a graphical control element that allows users to navigate a document, webpage, or other content that is too large to fit within the currently visible area, specifically by moving the content up and down.",
            pattern: "",
            customClass: "font-bold",
        }
            
    },
    {
        title: "Login",
        component: LoginForm,
        description: {
            content: "A login form is a user interface element, typically found on websites and applications, that allows registered users to access a protected system by verifying their identity. It usually requires users to input their username (or email) and password, and sometimes other authentication factors, to confirm they are who they claim to be.",
            pattern: "",
            customClass: "font-bold",
        }
            
    },
    {
        title: "Sign Up",
        component: SignupForm,
        description: {
            content:  "A signup form is a webpage where users input information to gain access to a website's services or content. Typically, these forms require users to provide personal details like their name, email address, username, and password.",
            pattern: "",
            customClass: "font-bold",
        }
           
    },
    {
        title: "Mouse Over",
        component: MouseOver,
        description: {
            content:  "Mouse Over in Selenium refers to simulating in user's action of hovering the mouse cursor over a web element (like a menu, tooltip, or dropdown) using the Actions class.",
            pattern: "Mouse Over in Selenium",
            token: "Mouse Over in Selenium",
            customClass: "font-bold",
        }
    },
    {
        title: "Keyboard Actions",
        component: KeyBoardActions,
    },
    {
        title: "List",
        component: List,
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
        component: ValidateCss,
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
        component: AnotherComponent,
    },
];

componentList = componentList.map((item: any) => {
    return {
        ...item,
        url: item.title.toLowerCase().replaceAll(" ", "-"),
    };
});

export default componentList;
