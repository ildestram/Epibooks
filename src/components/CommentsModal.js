import React, { useEffect } from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';
import CommentList from './CommentList';
import AddComment from './AddComment';
import '../Layout/CommentsModal.css';
import {commentsLoading, commentsError, arrayOfComments} from '../states/commentsState'
import { useDispatch, useSelector } from 'react-redux'; /* dispatch esegue azioni che sono in reducer, selector seleziona analiticamente lo stato che ci serve */
import { getCommentsFromBook } from '../states/commentsState';

const CommentsModal = ({ toggleModal, asin }) => { // definisce il componente CommentsModal con due proprietà: toggleModal e asin
   
    const dispatch = useDispatch()
    const loading = useSelector(commentsLoading)
    const error = useSelector(commentsError)
    const comments = useSelector(arrayOfComments)

    useEffect(()=> {
        dispatch(getCommentsFromBook())
    }, [dispatch])

    return (
        <div className="modal show comments-modal" style={{ display: 'block' }}> {/* definisce il layout della finestra modale */}
            <Modal.Dialog centered size="lg"> {/* definisce il layout della finestra di dialogo */}
                <Modal.Body> {/* definisce il corpo della finestra di dialogo */}
                    {loading && ( //se loading è true, mostra uno spinner
                        <div className="d-flex justify-content-center align-items-center">
                            <Spinner animation="border" role="status">
                            </Spinner>
                        </div>
                    )}
                    {!loading && ( // se loading è false, mostra CommentList e AddComment
                        <>
                            <CommentList comments={comments} />
                            <AddComment asin={asin} />
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer> {/* definisce il piè di pagina della finestra di dialogo */}
                    <Button onClick={toggleModal} variant="secondary"> {/* definisce il bottone di chiusura della finestra di dialogo */}
                        Chiudi
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
};

export default CommentsModal;


