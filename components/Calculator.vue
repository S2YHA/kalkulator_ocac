<template>
  <Card>
    <CardHeader>
      <CardTitle>Kalkulator OC/AC</CardTitle>
    </CardHeader>
    <CardContent class="grid gap-6">
      <div class="grid grid-cols-2 gap-4">
        <div class="grid gap-2">
          <Label for="netto">Netto</Label>
          <Input id="netto" type="number" />
        </div>
        <div class="grid gap-2">
          <Label for="brutto">Brutto</Label>
          <Input id="brutto" type="number" />
        </div>
      </div>
      <div class="grid gap-2">
        <Label for="subject">Rok produkcji</Label>
        <Input id="subject" type="number" />
      </div>
      <div class="flex gap-2">
        <Checkbox id="terms1" />
        <div class="grid gap-1.5 leading-none">
          <label
            for="terms1"
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Pakiet Drive+
          </label>
        </div>
      </div>
      <div class="grid gap-2">
        <Label for="subject">Raty</Label>
        <RadioGroup default-value="option-one">
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="option-one" value="option-one" />
            <Label for="option-one">Brak</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="option-two" value="option-two" />
            <Label for="option-two">2</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="option-three" value="option-three" />
            <Label for="option-three">4</Label>
          </div>
        </RadioGroup>
      </div>
      <div class="grid gap-2">
        <Label class="text-center">3250</Label>
      </div>
    </CardContent>
    <CardFooter class="space-x-2">
      <Button>Oblicz</Button>
      <Button variant="outline">Wyczyść</Button>
    </CardFooter>
  </Card>
</template>
