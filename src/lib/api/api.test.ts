import api from ".";
import React from 'react';
import { render, screen } from '@testing-library/react';

describe("API", () => {
  it("should fetch data from the API", async () => {
    const response = await api.get("/hello");
    expect(response.data).toEqual({ name: "John Doe" });
  });
});
