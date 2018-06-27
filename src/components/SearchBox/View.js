import React from "react"

import { SearchBox, Form, Input, Button } from "./styles"

export default () => (
  <SearchBox>
    <Form>
      <Input placeholder="Search Recipe..." />
      <Button>Search</Button>
    </Form>
  </SearchBox>
)
