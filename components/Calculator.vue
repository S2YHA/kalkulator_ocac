<template>
  <Card>
    <CardHeader>
      <CardTitle>Kalkulator OC/AC</CardTitle>
    </CardHeader>
    <CardContent class="grid gap-6">
      <div class="grid grid-cols-2 gap-4">
        <div class="grid gap-2">
          <Label for="netto">Netto</Label>
          <Input
            id="netto"
            type="number"
            v-model="net"
            @input="calculateGross"
          />
        </div>
        <div class="grid gap-2">
          <Label for="brutto">Brutto</Label>
          <Input
            id="brutto"
            type="number"
            v-model="gross"
            @input="calculateNet"
          />
        </div>
      </div>
      <div class="grid gap-2">
        <Label for="subject">Rok produkcji</Label>
        <Input id="subject" type="number" v-model="year" />
      </div>
      <div class="flex gap-2">
        <Checkbox id="terms1" v-model:checked="drivePlus" />
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
        <RadioGroup v-model="rates" default-value="0">
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="option-one" value="0" />
            <Label for="option-one">Brak</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="option-two" value="2" />
            <Label for="option-two">2</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="option-three" value="4" />
            <Label for="option-three">4</Label>
          </div>
        </RadioGroup>
      </div>
      <div class="grid gap-2">
        <Label class="text-center">{{ price }}</Label>
      </div>
    </CardContent>
    <CardFooter class="space-x-2">
      <Button @click="calculate">Oblicz</Button>
      <Button variant="outline" @click="clear">Wyczyść</Button>
    </CardFooter>
  </Card>
</template>

<script setup>
const net = ref(0);
const gross = ref(0);
const year = ref(null);
const drivePlus = ref(true);
const rates = ref("0");
const price = ref(null);

const calculateNet = () => {
  net.value = gross.value / 1.23;
};

const calculateGross = () => {
  gross.value = net.value * 1.23;
};

const calculate = () => {
  console.log("Calculating...");
};

const clear = () => {
  net.value = 0;
  gross.value = 0;
  year.value = null;
  drivePlus.value = true;
  rates.value = "0";
  price.value = null;
};
</script>
