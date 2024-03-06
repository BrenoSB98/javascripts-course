const sequence = {
  _value: 0,
  get value() {
    return this._value++;
  },
  set value(value) {
    if (value > this._value) {
      this._value = value;
    }
  },
};

const increment = () => {
  console.log(sequence.value);
};

increment();
increment();
increment();
increment();
increment();
increment();
increment();
increment();
increment();
increment();
increment();
increment();
increment();
increment();
