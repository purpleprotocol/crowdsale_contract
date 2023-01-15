## Purplecoin Crowdsale
Purplecoin crowdsale contract

## Original README
install dependencies
run server.js

post to localhost:3000/generateContract
````
{
	"waves":3,
	"token": {
		"name" : "Purplecoin",
		"ticker" : "XPU"
	}
}
````
Where waves are the amount of aves that you want(2 min)
And token name and ticker

Then after this post to localhost:3000/generateContract

```
{"meta":{
  "DATES": {
    "START_IN_DAYS": 1,
    "END_IN_DAYS": 180
  },
  "RATE" : 790,
  "GOAL"  : 30000
  },
  "waveData": [{
         "PRE-ICO":
          {
                    "BONUS": 200,
                    "CAP": 24050
                }
        },
        {
            "WAVE1": {
                "BONUS": 100,
                "CAP": 24050
            }
        },
        {
            "WAVE2": {
                "BONUS": 0,
                "CAP": 24050
            }
        }
  }],
  "wallets":{
    "OWNER":{
      "ADDRESS" : "0x1aD0f562a145365Ba1E49B4f73C6463EF35d0750", 
      "AMOUNT" : 100
    }
  }
}
````
DATES: are the start and end date, relative to now.
RATE: how much tokens for 1 eth.
GOAL: the softcap, only when this is reached all waves unlock(except for PRE-ICO which is not refundable)
Wavedata: for each wave the data, the first wave is always "PRE-ICO", from then on WAVEi (where i is the number of the wave)
cap = the wave cap
Bonus = the bonus in percent

Wallets: here you put your teamwallets and the amount they are getting on successfull complation of the contract.
