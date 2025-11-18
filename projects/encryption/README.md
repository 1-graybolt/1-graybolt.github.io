
# Encryption Activity Reflection


## Part 1: Key Exchange

My Key:4
My Partner's Key:2

Our initial shared key:6

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

| Encoded Message | Decoded Message | Key |
|No               |Hi               |  6  |
|                 |                 |     |
|Fnnc ktbj        |Good luck        |     |
|cdbnchmf         |decoding this one|  25 |
|sghr nmd.        |                 |     |
|                 |                 |     |
|M wsqilsa higshih|I somehow decoded|     |              
|alex csy wemh    |what you said    |  4  |
|epxlsykl mx      |although         |     |
|xsso e psrk xmqi.|it took a long time.   |
|                 |                 |     |
|ehe B'f          |lol I'm          |     |          
|vaxtmbgz         |cheating         | 19  |              
|pbma             |with             |     |        
|tg hgebg         |an online        |     |
|wxvhwxk.         |decoder.         |     |
|                 |                 |     |
|                 |                 |     |


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here:

Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1: Zg

    Source: [Edom]
    Destination: [Chris]  
    Sequence: 1/3
    Data: [01011010] [01100111]
    =========
    Packet 2:  5Z

    Source: [Edom]
    Destination: [Chris]
    Sequence: 2/3 
    Data: [00000101] [01011010]
    =========
    Packet 3: GQ

    Source: [Edom]
    Destination: [Chris]
    Sequence: 3/3
    Data: [01000111] [01010001]
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation?
Symmetric encryption uses the same key for both encryption and decryption. Asymmetric encryption uses different key for encryption and decryption. We used Asymmetric encryption to select the numbers that would be our keys for the conversation we will have later. We used Asymetric encryption first because we wanted a more secure location to exchange the keys and this helps us protect the keys we will use later. This also makes it harder for hackers to ear drop on our conversation. After we got the key we used Symmetric encryption because it makes it makes it easier encrypt and decrypt for us. We also know a shared secret that other people dont now about. Thus its still harder for hackers to listen and now what were talking about. Even if if they now the shared secret for the first conversation. Our shared secret keeps changing so they would not now everything we talked about just the bit of the conversation. 

- Why is it important that this protocol uses a new key for each message?
Its very important because if someone(who shouldnt get the conversation) gets the first shared secret key then they won't be able to know every conversation/everything we talked about.  

- Why is it important that you never share your secret key?
Its important to never share your secret key because if you share your secret key then the person who you shared it with can inpersonate you and can see/read every conversation you have.

- In the transport layer, do these messages use TCP or UDP? Why? 
The messages use TCP because the transmittion is guranteed the messages also take a while to encrypt and decrypt. 

- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer.
In the internet layer the packets are routed to different networks. While on the link layer packets are physically addressed.
- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other
information can they still see?
The protocol that sucessfully encrypts the content of the message is https. However even though the adversary in the middle cant read the content of the message, they can still where the connection is coming from and who is communicating with whom.
