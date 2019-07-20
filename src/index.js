import React from "react";
import ReactDOM from "react-dom";
import { Spotlight } from "./Spotlight";
import "./styles.css";

class App extends React.Component {
  state = {
    trigger: false
  };

  handleTrigger() {
    this.setState({
      trigger: !this.state.trigger
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <button
            onClick={() => this.handleTrigger()}
            style={{ position: "fixed", right: 0, zIndex: 999999999 }}
          >
            Trigger Safari Experience
          </button>
          <h1
            data-tour-id="1"
            data-next-tour-id="2"
            data-tour-text="This is just amazing!"
          >
            A Pure Woman
          </h1>
          <p>
            This was Thomas Hardy's rejoinder in advance to anyone who might
            think that the tragic heroine of Tess of the d'Urbervilles was
            damaged goods after her sexual encounter with dastardly Alec. The
            current TV adaptation backs Hardy's assertion by showing us a nasty
            rape, but the novel itself is much more ambiguous. Hardy wants us to
            think that even if Tess did give in to Alec, she is (as Angel Clare
            cannot see) still pure.
          </p>
          <h1>The Modern Prometheus</h1>
          <p
            data-tour-id="2"
            data-next-tour-id="3"
            data-tour-text="This is just amazing!"
          >
            Portentous, perhaps, but Mary Shelley's subtitle to Frankenstein
            fearlessly declared that its author was making a modern myth. Now
            the gods are gone, humans make their own destroyers. Shelley was
            handing an essay title to generations of students.
          </p>
          <h1>Moeurs de Province</h1>
          <p>
            Flaubert's quietly sardonic subtitle for Madame Bovary was
            calculated to make the book even more provoking to its ﬁrst readers.
            The story of adultery, stupidity and despair was presented as a
            study of "provincial habits". It was like saying, "this is what goes
            on in lovely Normandy".
          </p>
          <h1
            data-tour-id="3"
            data-next-tour-id="4"
            data-tour-text="This is just amazing!"
          >
            A Gothic Story
          </h1>
          <p>
            Horace Walpole's subtitle to The Castle of Otranto was the ﬁrst
            application of the word "Gothic" to a literary work. He was
            inventing a new genre. He was also doing something deliciously camp.
            In 1765, when his novel was published, the subtitle meant something
            like "a barbarous tale" - and so it was, with ghosts, tunnels and a
            sexually maddened medieval prince. Simply thrill-making!
          </p>
          <h1
            data-tour-id="4"
            data-next-tour-id="5"
            data-tour-text="This is just amazing!"
          >
            A Tale of Passion
          </h1>
          <p>
            A clever one, this. Ford Madox Ford's The Good Soldier is a novel in
            which the characters behave with elaborate politeness and exercise
            great ingenuity to avoid saying anything nasty. But they are driven
            by dark desires and get up to all sorts: adultery, pimping, a couple
            of suicides. "Passion" seems a generous word for what is driving
            everyone.
          </p>
          <h1>A Novel Without a Hero</h1>
          <p
            data-tour-id="5"
            data-next-tour-id="6"
            data-tour-text="This is just amazing!"
          >
            Vanity Fair may be set during the Napoleonic wars, but Vanity Fair,
            Thackeray tells us, is where we all live, all the time. It is indeed
            an unheroic place. The subtitle lets us know in advance that no one
            will ride in on a charger to rescue the virtuous or punish the
            vicious.
          </p>
          <h1>Female Diffculties</h1>
          <p>
            When she gave this subtitle to The Wanderer, it was almost as if
            Fanny Burney foresaw all those academics writing feminist articles
            on her oeuvre. Juliet, a mysterious and penniless émigrée from
            revolutionary France, tries to make her way in London and encounters
            every kind of "diffculty" - but the subtitle indicates that this is
            a lengthy parable of the female condition.
          </p>
          <h1
            data-tour-id="6"
            data-next-tour-id="7"
            data-tour-text="This is just amazing!"
          >
            A Simple Tale
          </h1>
          <p>
            Joseph Conrad insisted on this mordant subtitle for The Secret
            Agent, in which nothing is simple and the police are almost as
            sinister as the terrorists. By a bleak irony, the unwitting "agent"
            who carries the bomb to its destination - and gets blown to
            smithereens - is the simple-minded Stevie.
          </p>
          <h1
            data-tour-id="7"
            data-next-tour-id="8"
            data-tour-text="This is just amazing!"
          >
            The Misfortunes of Virtue
          </h1>
          <p>
            This is the Marquis de Sade's Justine and only makes proper sense if
            paired with his novel Juliette, subtitled The Benefits of Vice. In
            the two novels, two orphaned sisters make their different ways in
            the world. The good girl gets tricked, exploited and raped; the
            amoral libertine gets wealth and happiness. It is also a nasty
            parody of the subtitle of the most widely read novel of the 18th
            century, Samuel Richardson's Pamela: Or, Virtue Rewarded.
          </p>
          <h1>What You Will</h1>
          <p
            data-tour-id="8"
            data-next-tour-id="1"
            data-tour-text="This is just amazing!"
          >
            Twelfth Night is one of only two Shakespeare plays to have a
            subtitle (the other being Henry VIII, or All Is True, which, to a
            viewer of the BBC's The Tudors, sounds pleasingly sarcastic).
            Twelfth Night is such an audacious mix of settings, plots and
            passions that the dramatist has to give his own baffled shrug in the
            subtitle. Especially as it has nothing to do with the Christmas
            season.
          </p>
        </div>
        {this.state.trigger &&
          ReactDOM.createPortal(<Spotlight />, document.body)}
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
