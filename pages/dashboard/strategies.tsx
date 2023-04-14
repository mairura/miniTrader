import Layout from '@/components/dashboard/Layout';
import { TRADERS_QUERY } from '@/queries';
import { useMutation, useQuery } from '@apollo/client';
import React, { FormEvent, use, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import Image from 'next/image';
import {
  MainBg,
  ModalBodyHeader,
  ModalBtn,
  ModalBtnIcon,
  ModalButton,
  ModalCancel,
  // ModalContainer,
  ModalData,
  ModalHeader,
  ModalInput,
  ModalPay,
  StrategiesBtn,
  StrategiesContainer,
  StrategiesContent,
  StrategiesData,
  StrategiesHeader,
  StrategiesName,
} from '@/components/dashboard/Projections.styles';
import { Modal, ModalBody } from 'reactstrap';
import { AuthContext, SubscribeContext } from '@/context';
import { CREATE_SUBSCRIPTION_QUERY } from '@/queries/subscriptions';
import { useRouter } from 'next/router';

export default function StrategiesPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    amount: {
      value: '',
      is_valid: true,
    },
  });

  const [modal, setModal] = useState({
    open: false,
    trader: '',
  });

  const { risk_level } = useContext(SubscribeContext);
  const { user } = useContext(AuthContext);

  const { data } = useQuery(TRADERS_QUERY, {
    variables: {
      risk_level,
    },
  });

  const [subscribe, { error }] = useMutation(CREATE_SUBSCRIPTION_QUERY, {
    onCompleted: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.amount.value) {
      toast.error('Please enter an amount');
      return;
    }

    if (!user) {
      toast.error('Please login to subscribe');
      return;
    }

    if (!modal.trader) {
      toast.error('Please select a trader to subscribe to');
      return;
    }

    toast.promise(
      new Promise(async (resolve, reject) => {
        try {
          let { data, errors } = await subscribe({
            variables: {
              amount: parseFloat(formData.amount.value),
              // 1 day
              duration_in_ms: 1 * 24 * 60 * 60 * 1000,

              trader: modal.trader,
              user: user.id,
            },
          });

          setModal({
            open: !modal.open,
            trader: '',
          });

          if (errors?.length || 0 > 0) {
            reject(errors);
          }
          resolve('Subscribed');
          router.push('/dashboard');
        } catch (err: any) {
          reject(error?.toString() || err);
        }
      }),
      {
        loading: 'Subscribing...',
        success: 'Subscribed',
        error: (err) => err.toString(),
      },
    );
  };

  return (
    <Layout>
      <MainBg>
        <StrategiesContainer className={!modal ? 'blur' : ''}>
          <StrategiesHeader>
            Found {(data?.traders || []).length}{' '}
            {risk_level.replaceAll('_', ' ').toLowerCase()} Risk Trader
            {(data?.traders || []).length > 1 ? 's' : ''}
          </StrategiesHeader>
          {data?.traders.map(
            (trader: {
              id: string;
              username: string;
              pnl: number;
              address: string;
            }) => {
              return (
                <StrategiesContent key={trader.id}>
                  <Image
                    src={`https://avatars.dicebear.com/api/avataaars/${trader.address}.svg`}
                    height={30}
                    width={30}
                    alt={`${trader.address} icon`}
                  />
                  <StrategiesName>{trader.username}</StrategiesName>
                  <StrategiesData>
                    <Image
                      src={
                        trader.pnl > 0 ? '/UpChevron.svg' : '/DownChevron.svg'
                      }
                      height={15}
                      width={15}
                      alt="chevron"
                    />
                    &nbsp;&nbsp;
                    <StrategiesName>{trader.pnl}</StrategiesName>
                  </StrategiesData>
                  <StrategiesBtn
                    onClick={() =>
                      setModal({
                        open: !modal.open,
                        trader: trader.id,
                      })
                    }
                  >
                    Follow
                  </StrategiesBtn>
                  {/* <ModalContainer> */}
                  <Modal
                    toggle={() =>
                      setModal({
                        open: !modal.open,
                        trader: trader.id,
                      })
                    }
                    isOpen={modal.open}
                    className="modal"
                  >
                    <ModalHeader className="modal-header">
                      <ModalBtn
                        aria-label="Close"
                        className="close"
                        type="button"
                        onClick={() =>
                          setModal({ open: !modal.open, trader: trader.id })
                        }
                      >
                        <ModalBtnIcon aria-hidden={true}>×</ModalBtnIcon>
                      </ModalBtn>
                    </ModalHeader>
                    <ModalBody>
                      <ModalData>
                        <ModalBodyHeader>
                          Enter Amount to Spend in BNB
                        </ModalBodyHeader>
                        <ModalPay>
                          <ModalInput
                            color={formData.amount.is_valid ? '#c4c4c4' : 'red'}
                            type="number"
                            placeholder="0.00"
                            min={0}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                amount: {
                                  ...formData.amount,
                                  value: e.target.value,
                                },
                              });
                            }}
                          />
                        </ModalPay>
                        <ModalButton onClick={handleSubscribe}>
                          Confirm
                        </ModalButton>
                        <ModalCancel
                          onClick={() =>
                            setModal({ open: !modal.open, trader: '' })
                          }
                        >
                          Cancel
                        </ModalCancel>
                      </ModalData>
                    </ModalBody>
                  </Modal>
                  {/* </ModalContainer> */}
                </StrategiesContent>
              );
            },
          )}
          {
            // if no traders
            (data?.traders || []).length === 0 && (
              <StrategiesContent>
                <StrategiesName>No Traders Found</StrategiesName>
              </StrategiesContent>
            )
          }
        </StrategiesContainer>
      </MainBg>
    </Layout>
  );
}
