import { write } from '../../actions'
import { AppDispatch, ChainDataProps, ChainDataActionTypes } from '../../types'

// @ts-ignore
import { Minima } from './minima'

// Test Minima
//Listen for Minima Events
/*window.addEventListener('MinimaEvent', function(evt) {})
Minima.cmd("random", function(json: any) {
    console.log("Minima random: ", json.response.random)
})*/

export const init = () => {
      Minima.init()
}

//export const addData = (payload: ChainDataProps) => storeAction(ChainDataActionTypes.ADD_DATA)(payload)

export const addAddress = () => {
  return async (dispatch: AppDispatch) => {

      //this.data.script = "ASSERT FLOOR ( @AMOUNT ) EQ @AMOUNT LET checkout = 0 WHILE ( checkout LT @TOTOUT ) DO IF GETOUTTOK ( checkout ) EQ @TOKENID THEN LET outamt = GETOUTAMT ( checkout ) ASSERT FLOOR ( outamt ) EQ outamt ENDIF LET checkout = INC ( checkout ) ENDWHILE RETURN TRUE";

        let chainData:  ChainDataProps = {
          data: {
            hexAccount: '',
            account: ''
          }
        }

        Minima.cmd("newaddress" , function( json: any ) {
        	//Double check this.. otherwise may LOSE funds..
        	if( json.status ) {
        		//Get the address
        		chainData.data.hexAccount = json.response.address.hexaddress
                chainData.data.account = json.response.address.miniaddress
            }
        })

        dispatch(write({data: chainData})(ChainDataActionTypes.ADD_DATA))
  }
}
