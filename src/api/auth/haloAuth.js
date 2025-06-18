const authorizeHalo = () => {
  const authUrl = new URL(`${import.meta.env.VITE_HALO_API_AUTH}`);

  authUrl.searchParams.set("tenant", import.meta.env.VITE_HALO_API_TENANT);
  authUrl.searchParams.set(
    "client_id",
    import.meta.env.VITE_HALO_API_CLIENT_ID
  );
  authUrl.searchParams.set("response_type", "token");
  authUrl.searchParams.set("scope", "all");
  authUrl.searchParams.set(
    "redirect_uri",
    import.meta.env.VITE_HALO_API_REDIRECT
  );

  // Redirect the user to this URL to begin authentication
  window.location.href = authUrl.toString();
};

export default authorizeHalo;
