export function validate(name: string, str: string): string {
  if (name === "first_name" || name === "second_name") {
    const name1 = name === "first_name" ? "имя" : "фамилия";
    const name2 = name === "first_name" ? "имени" : "фамилии";

    if (str.length === 0) {
      return `поле "${name1}" не должно быть пустым`;
    } else if (/([^А-ЯЁA-Z\-])/gi.test(str)) {
      if (name === "first_name") {
        return "имя должно состоять из кириллических или латинских букв";
      } else {
        return "фамилия должна состоять из кириллических или латинских букв";
      }
    } else if (str[0] !== str[0].toUpperCase()) {
      return `первый символ ${name2} должен быть заглавной буквой`;
    } else if (/ /.test(str)) {
      return `в ${name2} не должно быть пробелов`;
    }
  } else if (name === "display_name") {
    if (str.length === 0) {
      return 'поле "отображаемое имя" не должно быть пустым';
    }
  } else if (name === "login") {
    if (str.length === 0) {
      return "логин не должен быть пустым";
    } else if (str.length < 3 || str.length > 20) {
      return "длина логина должна составлять от трёх до двадцати символов включительно";
    } else if (/[^A-Z\-_0-9]/gi.test(str)) {
      return (
        "логин должен состоять из латинских букв, " +
        "может содержать цифры, дефис или нижнее подчёркивание"
      );
    } else if (!/[A-Z]/i.test(str)) {
      return "логин должен содержать хотя бы одну латинскую букву";
    } else if (/ /i.test(str)) {
      return "логин не должен содержать пробел (допустимы дефис и нижнее подчёркивание)";
    }
  } else if (name === "email") {
    if (str.length === 0) {
      return "адрес электронной почты не должен быть пустым";
    } else if (/[^A-Z0-9@\-_\.]/gi.test(str)) {
      return (
        "адрес электронной почты должен состоять из латинских букв, " +
        "может содержать цифры, дефис или нижнее подчёркивание"
      );
    } else if (!/\@/gi.test(str)) {
      return "адрес электронной почты должен содержать символ @";
    } else if (!/\./gi.test(str)) {
      return "адрес электронной почты должен содержать точку";
    } else if (!/@[A-Za-z].*\./.test(str)) {
      return (
        "в адресе электронной почты, между символом @ и точкой " +
        "должны быть латинские буквы"
      );
    } else if (!/.+?(?=@)/.test(str)) {
      return (
        "в адресе электронной почты перед символом @ " +
        "должны быть другие допустимые символы"
      );
    } else if (!/(\.).*[A-Za-z]/.test(str)) {
      return (
        "в адресе электронной почты после точки " +
        "должны быть латинские буквы"
      );
    }
  } else if (name === "password" || name === "password_again") {
    if (str.length === 0) {
      return "пароль не должен быть пустым";
    } else if (str.length < 8 || str.length > 40) {
      return "длина пароля должна составлять от восьми до сорока символов включительно";
    }
  } else if (
    name === "oldPassword" ||
    name === "newPassword" ||
    name === "newPassword_again"
  ) {
    if (str.length === 0) {
      if (name === "oldPassword") {
        return "старый пароль не должен быть пустым";
      } else if (name === "newPassword") {
        return "новый пароль не должен быть пустым";
      } else {
        return "новый пароль (набранный повторно) не должен быть пустым";
      }
    } else if (str.length < 8 || str.length > 40) {
      if (name === "oldPassword") {
        return (
          "длина старого пароля должна составлять от восьми до сорока " +
          "символов включительно"
        );
      } else if (name === "newPassword") {
        return (
          "длина нового пароля должна составлять от восьми до сорока " +
          "символов включительно"
        );
      } else {
        return (
          "длина нового пароля (набранного повторно) должна составлять " +
          "от восьми до сорока символов включительно"
        );
      }
    }
  } else if (name === "phone") {
    if (str.length === 0) {
      return "номер телефона не должен быть пустым";
    } else if (!/^\+?\d+$/.test(str)) {
      return "номер телефона должен состоять из цифр (допустим знак плюса в начале номера)";
    }
  } else if (name === "message") {
    if (str.length === 0) {
      return "сообщение не должно быть пустым";
    }
  }
  return "";
}
