import { ChangeEvent, useState } from "react";

export const useForm = <T extends Object>(initState: T) => {
  const [form, setFrom] = useState(initState);

  const handleForm = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = target

    setFrom({
      ...form,
      [name]: value
    })
  }

  return { form, handleForm }
}
