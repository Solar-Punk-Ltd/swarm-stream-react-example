# Swarm Stream JS - React Example

This project serves as a demonstration of how to use the [`swarm-stream-js`](https://github.com/Solar-Punk-Ltd/swarm-stream-js) library within a React application. It provides a basic user interface to showcase both the streaming (broadcasting) and playback (watching) functionalities.

## Purpose

The main goal of this example is to provide developers with a practical, working example of `swarm-stream-js` integration. You can use this codebase to:

- Understand the basic setup required for both streaming and playing media.
- See how to interact with the library's API for starting, stopping, and controlling streams.
- Get a starting point for building your own decentralized streaming applications on Swarm.

## Prerequisites

Before running this example, ensure you have the following:

- [Node.js](https://nodejs.org/) (which includes npm) installed.
- [pnpm](https://pnpm.io/installation) installed (as per the setup instructions).
- A local or remote [Swarm Bee node](https://docs.ethswarm.org/docs/bee/installation/install) running and accessible.
  - For streaming, you'll need a Bee node with write access and a valid Postage Stamp Batch ID.
  - For playback, you'll need a Bee node that can read from the Swarm network.
- A browser that supports the features required by `swarm-stream-js` (see [Browser Prerequisites & Limitations](https://github.com/Solar-Punk-Ltd/swarm-stream-js#browser-prerequisites--limitations) in the main library documentation, primarily Chrome is recommended).
- A wallet/signer (like MetaMask) if you intend to test the streaming functionality, as it requires signing for Swarm feed updates.

## Getting Started

1.  **Clone the repository (if you haven't already):**

    ```bash
    git clone [https://github.com/Solar-Punk-Ltd/swarm-stream-react-example.git](https://github.com/Solar-Punk-Ltd/swarm-stream-react-example.git)
    cd swarm-stream-react-example
    ```

2.  **Install dependencies:**
    This project uses `pnpm` for package management.

    ```bash
    pnpm i
    ```

3.  **Configure Environment Variables (if necessary):**
    Set your bee nodes' access points. Read and write can be the same.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

## Features Demonstrated

- **Streaming:**
  - Initiating a camera/microphone stream.
  - Starting the broadcast to a Swarm feed using `swarm-stream-js`.
  - Stopping the broadcast.
- **Playback:**
  - Inputting a streamer's Swarm address and stream topic.
  - Attaching the stream to a video player.
  - Controlling playback (play, pause).

## Further Information

For more details on the `swarm-stream-js` library itself, including its full API and how it works, please refer to the [main library repository](https://github.com/Solar-Punk-Ltd/swarm-stream-js).
