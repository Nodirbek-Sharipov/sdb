import React, {useEffect, useState} from 'react';
import {IMaskInput} from "react-imask";
import {useDispatch, useSelector} from "react-redux";
import {setIsActiveModal} from "../../store/reducers/MainPageReducer";
import {api} from "../../http";

function LoginModal() {
    const state =  useSelector(state => state);
    const [phone, setPhone] = useState('');
    const [code, setPassword] = useState('');
    const [isVerify, setIsVerify] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const dispatch = useDispatch();

    const loginBtn = async (e) =>{
        e.preventDefault();
        try{
            let res;
            res = await api.login({ phone });
            if (!res.data.error) {
                setIsVerify(true)
            } else {
                alert(res.data.error)
                setPhone('');
            }
            console.log(res)
        } catch (error) {
            console.error(error)
            // setAppState({ ...appState, loading: false });
            alert(error.response?.data?.error || "Error")
        }
    };

    const verifyBtn = async (e) =>{
        e.preventDefault();
        try{
            let res;
            res = await api.verify({ phone, code });
            if (!res.data.error) {
                setIsVerify(false);
                let { accessToken, refreshToken } = res.data;
                localStorage.setItem("accessToken", accessToken);
                localStorage.setItem("refreshToken", refreshToken);
                dispatch(setIsActiveModal(false));
            } else {
                alert(res.data.error);
                setPhone('');
                setPassword('');
                setIsVerify(false);
            }
            console.log(res)
        } catch (error) {
            console.error(error);
            // setAppState({ ...appState, loading: false });
            alert(error.response?.data?.error || "Error")
        }
    }

    useEffect(() =>{
        const handleWindowClick =(e) => {
            if(e.target.classList[0] === 'loginModal'){
                dispatch(setIsActiveModal(false))
            }
        };
        if(state.mainPageReducer.isActiveModal){
            window.addEventListener('click', (e) => handleWindowClick(e));
        } else{
            window.removeEventListener('click', handleWindowClick);
        }
        return () => window.removeEventListener('click',  handleWindowClick);
    }, []);

    return (
        <div className="loginModal">
            {
              isLogin ?
                  <div className="loginModal__panel">
                      <div className="loginModal__title">
                          <h1>Kirish</h1>
                      </div>
                      <div className="loginModal__form">
                          {
                              isVerify ?
                                  <form>
                                      <label className="form__group">
                                          <p className="form__group-text">Maxfiy kodni kiriting</p>
                                          <input type="number" placeholder="" value={code} onChange={(e) => {setPassword(e.target.value)}}/>
                                      </label>
                                      <button
                                          className="form__group-btn"
                                          onClick={(e) => verifyBtn(e)}
                                      >
                                          Kirish
                                      </button>
                                  </form>
                                  :
                                  <form>
                                      <label className="form__group">
                                          <p className="form__group-text">Telefon</p>
                                          {/*<input type="number" placeholder="+998 -- --- -- --"/>*/}
                                          <IMaskInput
                                              mask={`{+998} 00 000 00 00`}
                                              onAccept={
                                                  (value, mask) => setPhone(mask._unmaskedValue)
                                              }
                                              placeholder='+998 99 999 99 99'
                                          />
                                      </label>
                                      <button
                                          className="form__group-btn"
                                          onClick={(e) => loginBtn(e)}
                                      >
                                          Kirish
                                      </button>
                                  </form>
                          }
                      </div>
                  </div>
                  :
                  <div className="loginModal__panel">
                    <div className="loginModal__title small">
                        <h1>Iltimos, foydalanuvchi sifatida kiring</h1>
                    </div>
                    <div className="loginModal__btns">
                        <button
                            className="form__group-btn"
                            onClick={() => setIsLogin(true)}
                        >
                            Kirish
                        </button>
                        <button
                            className="form__group-btn"
                            onClick={() => {dispatch(setIsActiveModal(false))}}
                        >
                            Bekor qilish
                        </button>
                    </div>
                </div>
            }

        </div>
    );
}

export default LoginModal;