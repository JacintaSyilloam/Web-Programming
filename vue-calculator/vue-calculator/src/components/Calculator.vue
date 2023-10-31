<template>
    <div class="calculator">
        <div class="result">{{ currentVal }}</div>
        <div class="buttons">
            <div v-for="btn in calcButton" :key="btn" @click="action(btn)">{{ btn }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Calculator',
    props: {
        msg: String
    },
    data() {
        return {
            currentVal: '', // initialize mt string
            previousVal: '', // initialize mt string
            calcButton:
                ['%', '*', '/', 'AC',
                    '7', '8', '9', '+',
                    '4', '5', '6', '-',
                    '1', '2', '3', '1/x',
                    '0', '.', '='],
            operators: null
        };
    },
    methods: {
        action(btn) {
            if (btn === '.' || !isNaN(btn)) {
                this.currentVal += btn + ''
            }

            if (btn === '%') {
                this.currentVal = this.currentVal / 100 + ''
            }

            if (btn === '1/x') {
                this.currentVal = 1 / this.currentVal + ''
            }

            if (btn === 'AC') {
                this.currentVal = ''
            }

            if (['+', '-', '*', '/'].includes(btn)) {
                this.operators = btn
                this.previousVal = this.currentVal
                this.currentVal = ''
            }

            if (btn === '=') {
                this.currentVal = eval(
                    this.previousVal + this.operators + this.currentVal
                )
                this.previousVal = ''
                this.operators = null
            }
        }
    },
}
</script>

<style scoped>
.calculator {
  max-width: 300px;
  margin: 0 auto;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.result {
  font-size: 24px;
  text-align: right;
  margin-bottom: 10px;
  color: #000;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
}

.buttons > div {
  background-color: #ececec;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
  color: #000;
}

.buttons > div:hover {
  background-color: #ddd;
}
</style>