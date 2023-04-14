import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import {
  UserProfile,
  DashboardSection,
  HambugerMenu,
  MobiButton,
  MobileConnect,
  MobileContainer,
  MobileView,
  NavElements,
  NavMessage,
  SearchInput,
} from './Navbar.styles';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import Keymap from './Keymap';
import toast from 'react-hot-toast';
import { AuthContext } from '@/context';
import { formatAddress } from '@/helpers';
import CopyToClipboard from 'react-copy-to-clipboard';
import { AiOutlineCopy } from 'react-icons/ai';
import { SlLogout } from 'react-icons/sl';
import { JsonRpcProvider, formatEther } from 'ethers';
import { config } from '@/config';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [balance, setBalance] = useState(0);

  const { user, logout } = useContext(AuthContext);

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const getBalance = async (account: string) => {
      // get balance with ethers for bsc testnet
      let provider = new JsonRpcProvider(config.BSC_TESTNET_RPC);

      return provider.getBalance(account);
    };
    if (user?.wallet) {
      let account = user.wallet.accounts[0].address;

      getBalance(account)
        .then((balance) =>
          setBalance(parseFloat(parseFloat(formatEther(balance)).toFixed(4))),
        )
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <DashboardSection>
      {/*------------Mobile View--------*/}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="mobileDrawer"
      >
        <MobileView>
          <MobileContainer>
            <Image src="/Logo.svg" height={100} width={100} alt="mobilelogo" />
            <Image
              src="/Close.png"
              height={30}
              width={30}
              alt="close"
              onClick={closeMenu}
            />
          </MobileContainer>
          <Keymap />
          <MobiButton>
            {/* <MobileConnect>Connect</MobileConnect> */}
          </MobiButton>
        </MobileView>
      </Drawer>

      {/*------End Mobile View---------*/}
      <NavElements>
        <HambugerMenu onClick={toggleDrawer}>
          <Image
            src="/Hambuger.svg"
            height={15}
            width={30}
            alt="hambugermenu"
          />
        </HambugerMenu>
        <NavMessage>
          <span>Hello {user?.username ?? 'Guest'}, &nbsp; </span>
          <h1>Welcome!</h1>
        </NavMessage>
        <SearchInput type="search" placeholder="Minitrader" />{' '}
        <UserProfile>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                cursor: 'pointer',
              }}
            >
              <CopyToClipboard
                text={user?.wallet.accounts[0].address || '__'}
                onCopy={() => toast.success('Address copied')}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span>
                    {formatAddress(user?.wallet.accounts[0].address || '__')}
                  </span>
                  <AiOutlineCopy
                    style={{
                      marginLeft: '0.5rem',
                    }}
                  />
                </span>
              </CopyToClipboard>
            </div>
            <div>{balance} BNB</div>
          </div>
          <SlLogout
            style={{
              cursor: 'pointer',
            }}
            onClick={() => {
              logout();

              toast.success('Logged out');
              router.push('/account/login');
            }}
          />
          {/* <Image
            src="/EllipsisLine.svg"
            height={30}
            width={35}
            alt="ellipsis"
            style={{
              cursor: "pointer",
            }}
            onClick={() => toast.success("Coming soon")}
          /> */}
        </UserProfile>
        <HambugerMenu>
          <Image src="/Logo.svg" height={100} width={100} alt="mainlogo" />
        </HambugerMenu>
        {/* <ConnectButton onClick={connect}>Connect</ConnectButton> */}
      </NavElements>
    </DashboardSection>
  );
};

export default Navbar;
