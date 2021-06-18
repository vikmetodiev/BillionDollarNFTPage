import React, { useContext } from "react";
import { app } from "../firebase/config";
import { AuthContext } from "../Auth.js";
import { withRouter } from "react-router";
import { Button } from "reactstrap";

const About = ({ history }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="App">
      <div className="title">
      {currentUser ? (
        <h6 className="float-right ml-5">
          {" "}
          Hello, {currentUser?.email},{" "}
          <a onClick={() => app.auth().signOut()} href="">
            Sign Out
          </a>
        </h6>
      ) : (
        <h6 className="float-right ml-5">
          <Button onClick={() => history.push("/login")} className="m-2 login">
            Log in
          </Button>
          <Button onClick={() => history.push("/Sign")} className="m-2 login">
            Register
          </Button>
        </h6>
      )}
      <h2>About</h2>
    </div>
      <div class="artboard" style={{ marginTop: 20 }}>
        <div class="card">
          <div class="card__side card__side--back">
            <div class="card__details">
              <h3 class="card__theme">
                The Idea behind our platform is to create a platform based on
                the website build in 2005{" "}
                <a href="http://www.milliondollarhomepage.com/">
                  www.milliondollarhomepage.com
                </a>{" "}
                where online artist can upload, brag about and sell their works.
                The project idea is a lot steps further in the future from its
                origins as every piece of art, mostly all kind of images will be
                made into NFT(Non-fungible token) throught some blockchain.
              </h3>
            </div>
          </div>

          <div class="card__side card__side--front">
            <div class="card__theme">
              <div class="card__theme-box">
                <p class="card__title">Idea</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="artboard">
        <div class="card">
          <div class="card__side card__side--back">
            <div class="card__details">
              <h3 class="card__theme">
                “Non-fungible” more or less means that it’s unique and can’t be
                replaced with something else. For example, a bitcoin is fungible
                — trade one for another bitcoin, and you’ll have exactly the
                same thing. A one-of-a-kind trading card, however, is
                non-fungible. If you traded it for a different card, you’d have
                something completely different. You gave up a Squirtle, and got
                a 1909 T206 Honus Wagner, which StadiumTalk calls “the Mona Lisa
                of baseball cards.” (I’ll take their word for it.)
              </h3>
            </div>
          </div>

          <div class="card__side card__side--front">
            <div class="card__theme">
              <div class="card__theme-box">
                <p class="card__title">What is NFT</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="artboard">
        <div class="card">
          <div class="card__side card__side--back">
            <div class="card__details">
              <h3 class="card__theme">
                At a very high level, most NFTs are part of the Ethereum
                blockchain. Ethereum is a cryptocurrency, like bitcoin or
                dogecoin, but its blockchain also supports these NFTs, which
                store extra information that makes them work differently from,
                say, an ETH coin. It is worth noting that other blockchains can
                implement their own versions of NFTs.
              </h3>
            </div>
          </div>

          <div class="card__side card__side--front">
            <div class="card__theme">
              <div class="card__theme-box">
                <p class="card__title">How do NFTs work?</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="artboard">
        <div class="card">
          <div class="card__side card__side--back">
            <div class="card__details">
              <h3 class="card__theme">
                Blockchain is a system of recording information in a way that
                makes it difficult or impossible to change, hack, or cheat the
                system. A blockchain is essentially a digital ledger of
                transactions that is duplicated and distributed across the
                entire network of computer systems on the blockchain.
              </h3>
            </div>
          </div>

          <div class="card__side card__side--front">
            <div class="card__theme">
              <div class="card__theme-box">
                <p class="card__title">What is Blockchain</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="artboard">
        <div class="card">
          <div class="card__side card__side--back">
            <div class="card__details">
              <h3 class="card__theme">
                Ethereum is an open-source software platform that developers can
                use to create cryptocurrencies and other digital applications.
                Ethereum is also the name used to describe the cryptocurrency
                Ether. This beginner’s guide will quickly get you up to speed on
                the background of Ethereum, its intended purpose, and how it’s
                being used around the world.
              </h3>
            </div>
          </div>

          <div class="card__side card__side--front">
            <div class="card__theme">
              <div class="card__theme-box">
                <p class="card__title">What is Etherium</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(About);
