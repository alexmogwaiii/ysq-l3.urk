import React from 'react';
import { Input, DatePicker } from 'antd';
import dayjs from 'dayjs';

import { useUserContext } from '../../providers/userProvider';
import { RadioGroup } from '../../components/RadioGroup';

import styles from './styles.module.scss';

export const Intro = () => {
  const {
    values: { userName, date },
    setFieldValue,
  } = useUserContext();

  const onChangeDate = (d, dateString) => {
    setFieldValue(dateString);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>YSQ-L3</h2>

      <div className={styles.inputsContainer}>
        <div className={styles.inputContainer}>
          <span>Ім&apos;я</span>
          <Input
            value={userName}
            name='userName'
            onChange={(e) => {
              const { value } = e.target;
              setFieldValue('userName', value);
            }}
            placeholder='Basic usage'
          />
        </div>
        <div className={styles.inputContainer}>
          <span>Дата</span>
          <DatePicker defaultValue={dayjs(date)} onChange={onChangeDate} />
        </div>
      </div>

      <div className={styles.content}>
        <h3>ІНСТРУКЦІЯ</h3>

        <p className={styles.text}>
          Нижче наводяться твердження, які Ви можете використати для опису себе. Будь ласка,
          прочитайте кожне твердження і оцініть, наскільки добре воно описує Вас. Якщо Ви невпевнені
          щодо найкращого варіанту відповіді, то нехай Ваша відповідь буде ближча до того, що Ви
          емоційно, аніж раціонально, відчуваєте є більш правдивим. Якщо хочете, то змініть
          формулювання твердження так, щоб воно було навіть ще точнішим описом Вас (але не змінюйте
          початкового змісту твердження). Виберіть найбільш відповідну оцінку за шкалою від 1 до
          6,що описує Вас (включаючи Ваші перефразування):
        </p>

        <div>
          <h3 className={styles.tableTitle}>ШКАЛА</h3>
          <div className={styles.table}>
            <div className={styles.row}>
              <p>1 = абсолютно не відповідає мені </p>
              <p>4 = в міру відповідає мені</p>
            </div>
            <div className={styles.row}>
              <p>2 = в основному не відповідає мені</p>
              <p>5 = переважно відповідає мені</p>
            </div>
            <div className={styles.row}>
              <p>3 = більше вірно, ніж невірно</p>
              <p>6 = досконало описує мене</p>
            </div>
          </div>
        </div>

        <h3>ПРИКЛАД</h3>

        <p className={styles.text}>
          <span className={styles.marked}>
            A. Я переживаю, що не сподобаюсь важливим для мене людям.{' '}
          </span>
        </p>
        <RadioGroup />
      </div>
    </div>
  );
};
