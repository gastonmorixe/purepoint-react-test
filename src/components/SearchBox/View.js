import React from "react"

import { SearchBox, Form, Input, Button } from "./styles"

export default ({ fieldText, onInput, onSubmit, onClick }) => (
  <SearchBox>
    <Form onSubmit={onSubmit}>
      <Input
        placeholder="Search Recipe..."
        value={fieldText}
        onInput={onInput}
      />
      <Button onClick={onClick}>Search</Button>
    </Form>
  </SearchBox>
)
