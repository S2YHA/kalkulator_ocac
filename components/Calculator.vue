<template>
  <Card>
    <CardHeader>
      <CardTitle>Kalkulator OC/AC</CardTitle>
    </CardHeader>
    <CardContent class="grid gap-6">
      <div class="grid gap-2">
        <Label for="netto">Netto</Label>
        <Input id="netto" type="number" v-model="net" @input="calculateGross" />
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
        <p v-if="price.limitations" class="text-center">
          {{ price.limitations }}
        </p>
        <div v-if="price.insurancePrice">
          <p class="text-center">Składka ubezpieczenia:</p>
          <p class="text-center">
            <b>{{ price.insurancePrice }}</b>
          </p>
          <p class="text-center">Raty</p>
          <p v-for="installment in price.installments" class="text-center">
            {{ installment.installmentCount }} x
            <b>{{ installment.installmentPrice }}</b>

            - {{ installment.installmentFull }}
          </p>
        </div>
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
const installmentCount = ref("0");
const price = ref({});

const calculateNet = () => {
  net.value = gross.value / 1.23;
};

const calculateGross = () => {
  gross.value = net.value * 1.23;
};

const calculate = async () => {
  price.value = await $fetch("/api/calculate", {
    method: "POST",
    body: {
      net: net.value,
      year: year.value,
      drivePlus: drivePlus.value,
      installmentCount: installmentCount.value,
    },
  });
};

const clear = () => {
  net.value = 0;
  gross.value = 0;
  year.value = null;
  drivePlus.value = true;
  installmentCount.value = "0";
  price.value = {};
};
</script>
