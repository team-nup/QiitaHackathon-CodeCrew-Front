import { useState } from 'react';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import { startGemini } from '../../service/api/geminiapi/gemini';


export default function Gemini() {

  const[ isClickedBtn, setisClickedBtn] = useState(false);
  
  // gemini関連
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('応答を結果を出力');
  const [isloadFlg, setLoadFlg] = useState(false);

  const callGemini = async () => {
    setisClickedBtn(true);
    setLoadFlg(false);
    const response = await startGemini(inputText);
    setOutputText(response);
    setLoadFlg(true);
  }

  return (
    <>
        <h3>AIと相談</h3>
        <div className='geminiContaienr'>
        <div className='outputGeminiContainer'>
            {isClickedBtn ? (
            <div>
                {isloadFlg ?
                (<h2>{outputText}</h2>):(
                    <Box>
                        <CircularProgress />
                    </Box>
                )}
            </div>):(<h2>{outputText}</h2>)}
        </div>
            <div className='inputTextContainer'>
                <TextField 
                    fullWidth  
                    label="input message" 
                    variant="filled" 
                    color="primary"
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    onChange={(e:any) => setInputText(e.target.value)}/>
                <div className='isClicledChatBtn'>
                <IconButton 
                    color="primary" 
                    aria-label="add to shopping cart" 
                    size="large"
                    onClick={callGemini}>
                    <SendIcon fontSize="inherit" className='text-white'/>
                </IconButton>
                </div>
            </div>
        </div>
    </>
  )
}
