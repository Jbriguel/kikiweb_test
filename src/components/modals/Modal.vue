<template>
  <div v-if="isOpen" class="modal">
    <div class="modal-overlay" @click="closeModal"></div>

    <article class="modal-container">
      <header class="modal-container-header">
        <h1 class="modal-container-title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            aria-hidden="true"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="currentColor"
              d="M14 9V4H5v16h6.056c.328.417.724.785 1.18 1.085l1.39.915H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8v1h-7zm-2 2h9v5.949c0 .99-.501 1.916-1.336 2.465L16.5 21.498l-3.164-2.084A2.953 2.953 0 0 1 12 16.95V11zm2 5.949c0 .316.162.614.436.795l2.064 1.36 2.064-1.36a.954.954 0 0 0 .436-.795V13h-5v3.949z"
            />
          </svg>
          Terms and Services
        </h1>
        <button class="icon-button" @click="closeModal">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="currentColor"
              d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
            />
          </svg>
        </button>
      </header>
      <section class="modal-container-body rtf">
        <h2>Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur.</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Unum nescio, quo modo possit, si
          luxuriosus sit, finitas cupiditates habere. Hoc est non modo cor non habere, sed ne
          palatum quidem. Sic, et quidem diligentius saepiusque ista loquemur inter nos agemusque
          communiter. Paulum, cum regem Persem captum adduceret, eodem flumine invectio? Quid igitur
          dubitamus in tota eius natura quaerere quid sit effectum? Duo Reges: constructio
          interrete.
        </p>

        <h3>Ut proverbia non nulla veriora sint quam vestra dogmata.</h3>

        <p>
          Quasi vero, inquit, perpetua oratio rhetorum solum, non etiam philosophorum sit. Tria
          genera cupiditatum, naturales et necessariae, naturales et non necessariae, nec naturales
          nec necessariae. Sin aliud quid voles, postea. Consequatur summas voluptates non modo
          parvo, sed per me nihilo, si potest;
        </p>

        <p>
          Cur igitur easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non
          intellegatur? Primum in nostrane potestate est, quid meminerimus? Eam tum adesse, cum
          dolor omnis absit; Quodsi ipsam honestatem undique pertectam atque absolutam. Aliam vero
          vim voluptatis esse, aliam nihil dolendi, nisi valde pertinax fueris, concedas necesse
          est. Nec enim, cum tua causa cui commodes, beneficium illud habendum est, sed faeneratio,
          nec gratia deberi videtur ei, qui sua causa commodaverit. Universa enim illorum ratione
          cum tota vestra confligendum puto. Sed residamus, inquit, si placet. Sed vobis voluptatum
          perceptarum recordatio vitam beatam facit, et quidem corpore perceptarum. Itaque primos
          congressus copulationesque et consuetudinum instituendarum voluntates fieri propter
          voluptatem; Ita enim se Athenis collocavit, ut sit paene unus ex Atticis, ut id etiam
          cognomen videatur habiturus. Atque hoc loco similitudines eas, quibus illi uti solent,
          dissimillimas proferebas.
        </p>

        <h2>An hoc usque quaque, aliter in vita?</h2>
        <ol>
          <li>
            Etenim nec iustitia nec amicitia esse omnino poterunt, nisi ipsae per se expetuntur.
          </li>
          <li>Pisone in eo gymnasio, quod Ptolomaeum vocatur, unaque nobiscum Q.</li>
          <li>Certe nihil nisi quod possit ipsum propter se iure laudari.</li>
          <li>
            Itaque e contrario moderati aequabilesque habitus, affectiones ususque corporis apti
            esse ad naturam videntur.
          </li>
        </ol>

        <p>
          Utilitatis causa amicitia est quaesita. Qui autem de summo bono dissentit de tota
          philosophiae ratione dissentit. Quamquam non negatis nos intellegere quid sit voluptas,
          sed quid ille dicat. Sed emolumenta communia esse dicuntur, recte autem facta et peccata
          non habentur communia. Hoc positum in Phaedro a Platone probavit Epicurus sensitque in
          omni disputatione id fieri oportere. Potius inflammat, ut coercendi magis quam dedocendi
          esse videantur. Roges enim Aristonem, bonane ei videantur haec: vacuitas doloris,
          divitiae, valitudo; Totum autem id externum est, et quod externum, id in casu est. Non
          autem hoc: igitur ne illud quidem. Simul atque natum animal est, gaudet voluptate et eam
          appetit ut bonum, aspernatur dolorem ut malum. Quamquam tu hanc copiosiorem etiam soles
          dicere. Quid enim necesse est, tamquam meretricem in matronarum coetum, sic voluptatem in
          virtutum concilium adducere? Hoc positum in Phaedro a Platone probavit Epicurus sensitque
          in omni disputatione id fieri oportere. Videsne quam sit magna dissensio?
        </p>

        <h3>Claudii libidini, qui tum erat summo ne imperio, dederetur.</h3>

        <p>
          Eorum enim est haec querela, qui sibi cari sunt seseque diligunt. Cum audissem Antiochum,
          Brute, ut solebam, cum M. An obliviscimur, quantopere in audiendo in legendoque moveamur,
          cum pie, cum amice, cum magno animo aliquid factum cognoscimus? Qui igitur convenit ab
          alia voluptate dicere naturam proficisci, in alia summum bonum ponere? Magni enim
          aestimabat pecuniam non modo non contra leges, sed etiam legibus partam. Haec mirabilia
          videri intellego, sed cum certe superiora firma ac vera sint, his autem ea consentanea et
          consequentia, ne de horum quidem est veritate dubitandum. At, illa, ut vobis placet,
          partem quandam tuetur, reliquam deserit. Sed utrum hortandus es nobis, Luci, inquit, an
          etiam tua sponte propensus es? Sed est forma eius disciplinae, sicut fere ceterarum,
          triplex: una pars est naturae, disserendi altera, vivendi tertia. Nemo enim est, qui
          aliter dixerit quin omnium naturarum simile esset id, ad quod omnia referrentur, quod est
          ultimum rerum appetendarum. Quid est, quod ab ea absolvi et perfici debeat? Quod cum
          accidisset ut alter alterum necopinato videremus, surrexit statim. Tantum dico, magis
          fuisse vestrum agere Epicuri diem natalem, quam illius testamento cavere ut ageretur. Quod
          iam a me expectare noli. Quod totum contra est. Semper enim ita adsumit aliquid, ut ea,
          quae prima dederit, non deserat.
        </p>

        <h2>Sed nimis multa.</h2>

        <p>
          Nec vero alia sunt quaerenda contra Carneadeam illam sententiam. Negat enim summo bono
          afferre incrementum diem. Causa autem fuit huc veniendi ut quosdam hinc libros promerem.
          Deinde prima illa, quae in congressu solemus: Quid tu, inquit, huc? Minime vero probatur
          huic disciplinae, de qua loquor, aut iustitiam aut amicitiam propter utilitates adscisci
          aut probari. Nulla profecto est, quin suam vim retineat a primo ad extremum. Sed ad illum
          redeo. Quem quidem vos, cum improbis poenam proponitis, inpetibilem facitis, cum sapientem
          semper boni plus habere vultis, tolerabilem. Huic ego, si negaret quicquam interesse ad
          beate vivendum quali uteretur victu, concederem, laudarem etiam; Non igitur de improbo,
          sed de callido improbo quaerimus, qualis Q. His singulis copiose responderi solet, sed
          quae perspicua sunt longa esse non debent. Quae cum ita sint, effectum est nihil esse
          malum, quod turpe non sit.
        </p>
      </section>
      <footer class="modal-container-footer">
        <button class="button is-ghost">Decline</button>
        <button class="button is-primary">Accept</button>
      </footer>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: 'Modal Title',
    },
    content: {
      type: String,
      default: 'This is the modal content.',
    },
    confirmText: {
      type: String,
      default: 'Confirm',
    },
    cancelText: {
      type: String,
      default: 'Cancel',
    },
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    confirmAction() {
      this.$emit('confirm')
      this.closeModal()
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');

*,
*:before,
*:after {
  box-sizing: border-box;
}

/* Some basic CSS overrides */
body {
  line-height: 1.5;
  min-height: 100vh;
  font-family: 'Outfit', sans-serif;
  color: #2d232e;
  background-color: #c8c0bd;
  position: relative;
}

button,
input,
select,
textarea {
  font: inherit;
}

a {
  color: inherit;
}

/* End basic CSS override */

* {
  scrollbar-width: 0;
}

*::-webkit-scrollbar {
  background-color: transparent;
  width: 12px;
}

*::-webkit-scrollbar-thumb {
  border-radius: 99px;
  background-color: #ddd;
  border: 4px solid #fff;
}

.modal {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(#000, 0.25);
}

.modal-container {
  max-height: 90vh;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 15px 30px 0 rgba(#000, 0.25);
  @media (max-width: 600px) {
    width: 90%;
  }
}

.modal-container-header {
  padding: 16px 32px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-container-title {
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 1;
  font-weight: 700;
  font-size: 1.125;
  svg {
    width: 32px;
    height: 32px;
    color: #750550;
  }
}

.modal-container-body {
  padding: 24px 32px 51px;
  overflow-y: auto;
}

.rtf {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }

  h1 {
    font-size: 1.5rem;
    line-height: 1.125;
  }

  h2 {
    font-size: 1.25rem;
    line-height: 1.25;
  }

  h3 {
    font-size: 1rem;
    line-height: 1.5;
  }

  & > * + * {
    margin-top: 1em;
  }

  & > * + :is(h1, h2, h3) {
    margin-top: 2em;
  }

  & > :is(h1, h2, h3) + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    margin-left: 20px;
    list-style-position: inside;
  }

  ol {
    list-style: numeric;
  }

  ul {
    list-style: disc;
  }
}

.modal-container-footer {
  padding: 20px 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid #ddd;
  gap: 12px;
  position: relative;
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: -51px;
    left: 24px;
    right: 24px;
    height: 50px;
    flex-shrink: 0;
    background-image: linear-gradient(to top, rgba(#fff, 0.75), transparent);
    pointer-events: none;
  }
}

.button {
  padding: 12px 20px;
  border-radius: 8px;
  background-color: transparent;
  border: 0;
  font-weight: 600;
  cursor: pointer;
  transition: 0.15s ease;

  &.is-ghost {
    &:hover,
    &:focus {
      background-color: #dfdad7;
    }
  }

  &.is-primary {
    background-color: #750550;
    color: #fff;
    &:hover,
    &:focus {
      background-color: #4a0433;
    }
  }
}

.icon-button {
  padding: 0;
  border: 0;
  background-color: transparent;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.15s ease;
  svg {
    width: 24px;
    height: 24px;
  }

  &:hover,
  &:focus {
    background-color: #dfdad7;
  }
}
</style>
