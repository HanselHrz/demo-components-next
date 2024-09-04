import {
  Button,
  ButtonProps,
  CheckBox,
  FileUpload,
  Input,
  Label,
  Nav,
  RadioButton,
  Select,
  Text,
  Textarea,
} from "lynx-ui-demo-components";

export default function Home() {
  const variants: ButtonProps["variant"][] = ["default", "primary", "success", "danger", "warning"];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold"> Prueba libreria de componentes</h1>
      <h2 className="text-xl font-bold">Form Components</h2>
      <div className="flex min-h-full flex-1 flex-col justify-center px-4 py-10 lg:px-8">
        <div className="flex flex-col mt-5 sm:mx-auto sm:w-full">
          <Label variant="purple">Button</Label>
          {variants.map(variant => (
            <Button key={variant} variant={variant} className="m-2">
              {variant}
            </Button>
          ))}
          <Label variant="purple">Input</Label>
          <Input className="m-2" type="text" placeholder="Input" />
          <Input className="m-2" type="password" placeholder="Password" />
          <Input className="m-2" type="email" placeholder="Email" />
          <Input className="m-2" type="number" placeholder="Number" />
          <Input className="m-2" type="tel" placeholder="Tel" />
          <Input className="m-2" type="url" placeholder="Url" />
          <Input className="m-2" type="date" placeholder="Date" />
          <Input className="m-2" type="time" placeholder="Time" />
          <Input className="m-2" type="datetime-local" placeholder="Datetime-local" />
          <Label variant="purple">CheckBox</Label>
          <CheckBox className="m-2" />
          <CheckBox className="m-2" checkboxSize="large" colors="blue" />
          <CheckBox className="m-2" checkboxSize="large" colors="green" />
          <CheckBox className="m-2" checkboxSize="medium" colors="pink" />
          <Label variant="purple">RadioButton</Label>
          <RadioButton id="radio-1" label="Default Radio" name="radio-group" />
          <RadioButton disabled id="radio-2" label="Disabled Radio" name="radio-group" />
          <RadioButton checked disabled id="radio-3" label="Disabled Checked Radio" name="radio-group" />
          <Label variant="purple">Select</Label>
          <Select className="m-2" borderColor="gray" rounded="md" size="md" textColor="gray">
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select className="m-2" borderColor="blue" rounded="md" size="sm" textColor="blue">
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select className="m-2" borderColor="red" rounded="full" size="md" textColor="red">
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select className="m-2" borderColor="green" rounded="lg" size="lg" textColor="green">
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Label variant="purple" className="mb-2">
            Nav
          </Label>
          <Nav
            className="bg-blue-500"
            links={[
              {
                href: "#",
                label: "Home",
              },
              {
                href: "#",
                label: "About",
              },
              {
                href: "#",
                label: "Contact",
              },
            ]}
            logoText="MyBrand"
          />
          <Nav
            links={[
              {
                href: "#",
                icon: "facebook",
                label: "Facebook",
              },
              {
                href: "#",
                icon: "twitter",
                label: "Twitter",
              },
              {
                href: "#",
                icon: "instagram",
                label: "Instagram",
              },
              {
                href: "#",
                icon: "github",
                label: "GitHub",
              },
            ]}
            logoText="MyBrand"
          />
          <Nav
            className="bg-blue-500"
            links={[
              {
                href: "#",
                icon: "facebook",
                label: "Facebook",
              },
              {
                href: "#",
                icon: "twitter",
                label: "Twitter",
              },
              {
                href: "#",
                icon: "instagram",
                label: "Instagram",
              },
              {
                href: "#",
                icon: "github",
                label: "GitHub",
              },
            ]}
            logoText="MyBrand"
          />

          <Label variant="purple">FileUpload</Label>
          <FileUpload
            backgroundColor="white"
            borderColor="green"
            focusRingColor="gray"
            height="medium"
            label="Selecciona un archivo"
            padding="medium"
            rounded="md"
            shadow="md"
            textColor="gray"
            textSize="md"
            width="full"
          />
          <FileUpload
            backgroundColor="blue"
            borderColor="blue"
            focusRingColor="blue"
            height="large"
            label="Upload your file"
            padding="large"
            rounded="lg"
            shadow="md"
            textColor="blue"
            textSize="md"
            width="large"
          />
          <FileUpload
            backgroundColor="white"
            borderColor="gray"
            disabled
            focusRingColor="gray"
            height="medium"
            label="Selecciona un archivo"
            padding="medium"
            rounded="md"
            shadow="sm"
            textColor="gray"
            textSize="sm"
            width="full"
          />
        </div>
      </div>
    </main>
  );
}
