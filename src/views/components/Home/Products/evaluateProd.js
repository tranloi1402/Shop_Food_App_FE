import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { evaluateActions, evaluateSelectors } from '../../../../state/modules/evaluate';

const EvaluateProd = () => {
    const IDprod = useParams();
    const dispatch = useDispatch();
    const [stars, setStars] = useState();
    const [textInput, setTextInput] = useState();
    const [name, setName] = useState();
    const [message, setMessage] = useState();
    // getAll-Evaluate
    const evaluates = useSelector(evaluateSelectors.getAllEvaluate);
    useEffect(() => {
        dispatch(evaluateActions.getAllEvaluate(IDprod.id));
    }, [dispatch, IDprod]);

    const [listEval, setListEval] = useState();
    useEffect(() => {
        evaluates.map((data) => (
            setListEval(data.evaluate)
        ));
    }, [evaluates]);

    const [success, setSuccess] = useState();
    const handleSubmitEvaluate = () => {
        if (stars > 0 && textInput && name) {
            if (listEval) {
                setListEval([{ stars, name, title: textInput }, ...listEval]);
            } else {
                setListEval([{ stars, name, title: textInput }]);
            }
            setSuccess(2);
        } else {
            setSuccess(1);
            setMessage('Xin vui lòng điền đầy đủ thông tin!!!');
        }
    };
    useEffect(() => {
        if (success === 2) {
            const a = { idProducts: IDprod.id, evaluate: listEval };
            dispatch(evaluateActions.createEvaluate(a));
        }
    }, [dispatch, success, IDprod, listEval]);

    useEffect(() => {
        setTimeout(() => {
            setMessage();
        }, 5000);
    }, [message]);

    return (
        <div className='container mx-auto px-6 py-10 border mb-5 rounded-xl shadow-lg'>
            <div
                className={
                    message ? 'fixed top-12 right-3 shadow-lg mt-2 z-40' : 'hidden'
                }
            >
                <div
                    className={
                        message !== 2 ? 'bg-red-200 rounded-lg mt-5 border py-2 px-4'
                            : 'bg-green-200 rounded-lg mt-5 border py-2 px-4'
                    }
                >
                    <i
                        className={
                            message === 2 ? 'far fa-check-circle pr-3 text-green-500 text-xl font-semibold'
                                : 'fas fa-times pr-3 text-red-500 text-xl font-semibold'
                        }
                    />
                    <span className='font-semibold'>
                        {message === 2 ? 'Thêm thành công vào giỏ hàng!!!' : message}
                    </span>
                </div>
            </div>
            <h1 className='font-medium text-2xl text-gray-600'>Đánh giá sản phẩm</h1>
            <div className='border rounded-xl p-6 my-3'>
                <div className='block'>
                    <div className='text-lg my-1'>
                        <span className=''>Đánh giá sao:</span>
                        <button
                            onClick={() => setStars(1)}
                            type='button'
                            className={stars > 0 ? 'focus:outline-none mx-1 text-yellow-500' : 'focus:outline-none mx-1 text-gray-300'}
                        >
                            <i className='fas fa-star' />
                        </button>
                        <button
                            onClick={() => setStars(2)}
                            type='button'
                            className={stars > 1 ? 'focus:outline-none mx-1 text-yellow-500' : 'focus:outline-none mx-1 text-gray-300'}
                        >
                            <i className='fas fa-star' />
                        </button>
                        <button
                            onClick={() => setStars(3)}
                            type='button'
                            className={stars > 2 ? 'focus:outline-none mx-1 text-yellow-500' : 'focus:outline-none mx-1 text-gray-300'}
                        >
                            <i className='fas fa-star' />
                        </button>
                        <button
                            onClick={() => setStars(4)}
                            type='button'
                            className={stars > 3 ? 'focus:outline-none mx-1 text-yellow-500' : 'focus:outline-none mx-1 text-gray-300'}
                        >
                            <i className='fas fa-star' />
                        </button>
                        <button
                            onClick={() => setStars(5)}
                            type='button'
                            className={stars == 5 ? 'focus:outline-none mx-1 text-yellow-500' : 'focus:outline-none mx-1 text-gray-300'}
                        >
                            <i className='fas fa-star' />
                        </button>
                    </div>
                    <div className='my-2'>
                        <div className=''>
                            <div>
                                <input
                                    onChange={(e) => setName(e.target.value.trim())}
                                    placeholder='Nhập tên...'
                                    type='text'
                                    name='name'
                                    className='border rounded-md mt-3 mr-12 w-full
                                focus:outline-none bg-purple-white
                                py-1 px-4 text-lg'
                                />
                            </div>
                            <div>
                                <input
                                    onChange={(e) => setTextInput(e.target.value.trim())}
                                    placeholder='Đánh giá sản phẩm.......'
                                    type='text'
                                    name='evaluate'
                                    className='border rounded-md mt-3 mr-12 w-full
                                focus:outline-none bg-purple-white
                                py-1 px-4 text-lg'
                                />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <form>
                                <button
                                    onClick={() => handleSubmitEvaluate()}
                                    type='button'
                                    className='px-10 py-2 text-lg font-medium rounded-lg add text-white
                                hover:bg-blue-400 focus:outline-none focus:bg-blue-400'
                                >
                                    Đánh giá
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <hr className='my-6' />
            <div className='px-6'>
                {
                    (listEval && listEval.length > 0)
                        ? listEval.map((item, index) => (
                            <div
                                key={index}
                                className='border rounded mb-4 py-3'
                            >
                                <div className='flex'>
                                    <div>
                                        <img
                                            src='https://i.pinimg.com/originals/8d/a5/c3/8da5c3a06407303694d6381b23368f02.png'
                                            className='object-cover w-14 h-14 mx-4 rounded-full'
                                        />
                                    </div>
                                    <div>
                                        <h2 className='text-lg text-blue-600 font-medium'>{`< Tên ẩn danh : ${item.name}>`}</h2>
                                        <p className='text-base text-blue-600 px-3'>
                                            {`Đánh giá: ${item.stars}`}
                                            <i className='fas fa-star text-yellow-500 mx-2' />
                                        </p>
                                    </div>
                                </div>
                                <div className='flex mt-3'>
                                    <h3 className='text-xl font-medium text-gray-700 normal-case ml-5 sm:ml-24'>Bình luận:</h3>
                                    <span className='text-xl normal-case font-normal text-gray-600 mx-3'>{item.title}</span>
                                </div>
                            </div>
                        ))
                        : <h1 className='text-2xl text-center text-red-500 font-semibold'>( Trống!!!! )</h1>
                }
            </div>
        </div>
    );
};

export default EvaluateProd;
