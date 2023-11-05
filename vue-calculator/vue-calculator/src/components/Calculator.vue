<template>
    <div class="bg-gray-950 flex items-center justify-center h-screen">
        <div class="p-4 bg-gray-950 border border-red-600 rounded-lg shadow-lg flex flex-col">
            <div class="p-4 text-3xl text-white mb-4">{{ display }}</div>
            <div class="grid grid-cols-4 gap-4">
                <div v-for="btn in calcButton" :key="btn" @click="action(btn)"
                    class="py-3 px-4 text-2xl text-red-600 rounded-full cursor-pointer duration-200">
                    {{ btn }}
                </div>
            </div>
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
    computed: {
        display() {
            if (this.currentVal) {
                return this.currentVal;
            } else {
                if (this.operators) {
                    return this.previousVal;
                } else {
                    return '0';
                }
            }
        },
    }
}
</script>