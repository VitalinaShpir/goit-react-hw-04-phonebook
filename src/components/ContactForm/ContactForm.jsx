import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import css from './ContactForm.module.css';

export const ContactForm = ({ onFormSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmitContact = e => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value.trim();
    const number = form.number.value.trim();
  

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    onFormSubmit(newContact);
    reset();

    
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const nameChange = ({ target }) => {
    setName(target.value);
  };
  const numberChange = ({ target }) => {
    setNumber(target.value);
  };
  

  return (
    <form className={css.formBox} onSubmit={handleSubmitContact}>
      <div className={css.formInputBox}>
        <label className={css.formInputTxt}>
          Name
          <input
            className={css.formInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={nameChange}
            value={name}
          />
        </label>
      </div>

      <div className={css.formInputBox}>
        {' '}
        <label className={css.formInputTxt}>
          Number
          <input
            className={css.formInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={numberChange}
            value={number}
          />
        </label>{' '}
      </div>
      <button className={css.addBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleSubmitContact = e => {
//     const { name, number } = this.state;
//     e.preventDefault();
//     if (!name.trim() || !number.trim()) {
//       alert('Fill all fields');
//       return;
//     }

//     const newContact = {
//       id: nanoid(),
//       name: name.trim(),
//       number: number.trim(),
//     };
//     this.props.onFormSubmit(newContact);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({
//       name: ' ',
//       number: ' ',
//     });
//   };

//   nameChange = e => {
//     const { name, value } = e.currentTarget;

//     this.setState({ [name]: value });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form className={css.formBox} onSubmit={this.handleSubmitContact}>
//         <div className={css.formInputBox}>
//         <label className={css.formInputTxt} >
//           Name
//           <input
//           className={css.formInput}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={this.nameChange}
//             value={name}
//           />
//         </label></div>

//        <div className={css.formInputBox}> <label className={css.formInputTxt}>
//           Number
//           <input
//           className={css.formInput}
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             onChange={this.nameChange}
//             value={number}
//           />
//         </label> </div>
//         <button className={css.addBtn}  type="submit">Add contact</button>
//       </form>
//     );
//   }
// }

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
