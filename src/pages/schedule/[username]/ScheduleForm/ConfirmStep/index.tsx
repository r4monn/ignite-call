import { Button, Text, TextArea, TextInput } from "@flawless-ui/react";
import { ConfirmForm, FormActions, FormError, FormHeader } from "./styles";
import { useForm } from "react-hook-form"
import { CalendarBlank, Clock } from "phosphor-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const confirmFormSchema = z.object({
  name: z.string().min(3, { message: 'O nome precisa de no mínimo 3 carácteres'}),
  email: z.string().email({ message: 'Digite um e-mail válido'}),
  observations: z.string().nullable(),
})

type ConfirmFormData = z.infer<typeof confirmFormSchema>

export function ConfirmStep() {
  const {
      register, 
      handleSubmit, 
      formState: { isSubmitting, errors }
    } = useForm<ConfirmFormData>({
    resolver: zodResolver(confirmFormSchema)
  })

  function handleConfirmScheduling(data: ConfirmFormData) {
    console.log(data)
  }

  return (
    <ConfirmForm as="form" onSubmit={handleSubmit(handleConfirmScheduling)}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          31 de Maio de 2023
        </Text>
        <Text>
          <Clock />
          18:00h
        </Text>
      </FormHeader>

      <label>
        <Text size="sm">Nome completo</Text>
        <TextInput placeholder="Seu nome" {...register('name')} />
        {errors.name && <FormError>{errors.name.message}</FormError>}
      </label>

      <label>
        <Text size="sm">Endereço de e-mail</Text>
        <TextInput 
          type="email" 
          placeholder="johndoe@example.com" 
          {...register('email')} 
        />
        {errors.email && <FormError>{errors.email.message}</FormError>}
      </label>

      <label>
        <Text size="sm">Observações</Text>
        <TextArea {...register('observations')} />
      </label>

      <FormActions>
        <Button type="button" variant="tertiary">Cancelar</Button>
        <Button type="submit" disabled={isSubmitting}>Confirmar</Button>
      </FormActions>
    </ConfirmForm>
  ) 
}