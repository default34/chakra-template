import { Input } from "@chakra-ui/react";

function App() {
  return (
    <div className="main">
      <Input
        placeholder="Фамилия"
        size="sm"
      />
      <br />
      <br />
      <Input
        placeholder="Фамилия"
        size="md"
      />
      <br />
      <br />
      <Input
        placeholder="Фамилия"
        size="lg"
      />
      <br />
      <br />
      <Input
        placeholder="Фамилия"
        size="sm"
        variant="secondary"
      />
      <br />
      <br />
      <Input
        placeholder="Фамилия"
        size="md"
        variant="secondary"
      />
      <br />
      <br />
      <Input
        placeholder="Фамилия"
        size="lg"
        variant="secondary"
      />
    </div>
  );
}

export default App;
