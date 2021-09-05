module.exports = {
  purge: {
    enabled : false
  },
  darkMode: false, // or 'media' or 'class'
  theme:             {
    extend: {},
    colors: {
      green : 'var(--green)',
      greenFade :' var(--greenFade)',
      greenLight : 'var(--greenLight)',
      grayLight : 'var(--grayLight)',
      red :' var(--red)',
      black: 'var(--black)'

    },
    fontFamily: {
      body: ['openSans'],
      'IRANYekan' : ['IRANYekan','openSans']
    },
    container: {
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1280px',
        '1580px': '1200px',
        '1700px': '1500px',
      },
    },
    fontSize: {
      base: '1rem', // 1rem = 16 px
      // heading1: [
      //   '2.5rem',
      //   {
      //     fontWeight: 'bold',
      //   },
      // ],
      // heading2: [
      //   '1.563rem',
      //   {
      //     fontWeight: 'bold',
      //   },
      // ],
      // body1: [
      //   '1.125rem',
      //   {
      //     fontWeight: 'normal',
      //   },
      // ],
      // body2: [
      //   '1rem',
      //   {
      //     fontWeight: 'normal',
      //   },
      // ],
      // body3: [
      //   '1rem',
      //   {
      //     fontWeight: '400',
      //   },
      // ],
      // body4: [
      //   '0.875rem',
      //   {
      //     fontWeight: 'normal',
      //   },
      // ],
      // body5: [
      //   '0.875rem',
      //   {
      //     fontWeight: '400',
      //   },
      // ],
      // body6: [
      //   '0.75rem',
      //   {
      //     fontWeight: 'normal',
      //   },
      // ],
    },
  },
  plugins: [],
}
