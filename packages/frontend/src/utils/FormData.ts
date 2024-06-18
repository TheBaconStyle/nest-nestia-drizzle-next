export function objectToFormData(object: Record<string, any>) {
  const formData = new FormData()
  for (const key in object) {
    formData.append(key, object[key])
  }
  return formData
}

export function formDataToObject(formData: FormData): Record<string, any> {
  return Object.fromEntries(formData.entries())
}
