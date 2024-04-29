--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(255)
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.categories_id_seq OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: movie_category_join; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movie_category_join (
    category_id integer NOT NULL,
    movie_id integer NOT NULL
);


ALTER TABLE public.movie_category_join OWNER TO postgres;

--
-- Name: movies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movies (
    id integer NOT NULL,
    pegi integer NOT NULL,
    release_year integer,
    runtime integer NOT NULL,
    uuid uuid,
    background_src character varying(255),
    description text,
    poster_src character varying(255),
    short_description character varying(255),
    title character varying(255),
    video_src character varying(255)
);


ALTER TABLE public.movies OWNER TO postgres;

--
-- Name: movies_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.movies_id_seq OWNER TO postgres;

--
-- Name: movies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.movies_id_seq OWNED BY public.movies.id;


--
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying(255)
);


ALTER TABLE public.roles OWNER TO postgres;

--
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.roles_id_seq OWNER TO postgres;

--
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;


--
-- Name: user_role_join; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_role_join (
    role_id integer NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE public.user_role_join OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    "registered at" timestamp(6) without time zone,
    email character varying(255),
    password character varying(255),
    username character varying(255)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: movies id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies ALTER COLUMN id SET DEFAULT nextval('public.movies_id_seq'::regclass);


--
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (id, name) FROM stdin;
1	Action
2	Adventure
3	Animation
4	Comedy
5	Crime
6	Drama
7	Fantasy
8	Horror
9	Mystery
10	Romance
11	Sci-Fi
12	Thriller
\.


--
-- Data for Name: movie_category_join; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.movie_category_join (category_id, movie_id) FROM stdin;
1	1
2	1
\.


--
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.movies (id, pegi, release_year, runtime, uuid, background_src, description, poster_src, short_description, title, video_src) FROM stdin;
1	16	2020	7200	1ed8172f-3fe1-42c7-a43b-0e701f3c6ff5	/media/image/chicago_background.jpg	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.	/media/image/chicago_poster.jpg	If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.	MovieTitle	/media/video/polygon_720p.mp4
2	18	2023	9500	7dd229be-2987-4b29-b58d-bd7c6b575d55	/media/image/emergency_background.jpg	In a dystopian future, the world is on the verge of a catastrophic event that threatens to wipe out all life. Amidst the backdrop of a world ravaged by war, terrorism, and environmental disasters, a group of survivors embarks on a perilous journey to find a safe haven. This journey is not just about survival; it's about the human spirit's resilience and the search for meaning in a world that has been irrevocably changed.	/media/image/emergency_poster.jpg	In a world on the brink of apocalypse, a group of survivors must navigate the chaos and uncertainty to find a safe haven.	Emergency	/media/video/polygon_720p.mp4
3	16	2020	7200	7305c4f3-9157-4dee-83d7-2f5f7cd8eeaf	/media/image/new_york_background.jpg	"The New York Guardian" is not just a superhero movie; it's a celebration of New York City's spirit and its people. The film explores themes of resilience, community, and the indomitable spirit of its inhabitants. With its stunning visuals, compelling characters, and heart-racing action sequences, "The New York Guardian" promises to be a must-see for fans of superhero movies and anyone who loves New York City.	/media/image/new_york_poster.jpg	The story follows a young, ambitious journalist named Alex, who stumbles upon a secret society of heroes protecting the city from unseen threats. Inspired by their bravery, Alex decides to join their ranks, adopting the code name "The Guardian."	New York	/media/video/polygon_720p.mp4
\.


--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roles (id, name) FROM stdin;
1	ROLE_USER
2	ROLE_ADMIN
\.


--
-- Data for Name: user_role_join; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_role_join (role_id, user_id) FROM stdin;
1	1
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, "registered at", email, password, username) FROM stdin;
1	2024-03-13 17:00:50.352	test@test.com	$2a$10$MRdNK/MDDhAJ4JBNyQ9VG.JQQ3UTG6H4BjplC5rLa6.sYe5VzU3Lm	test
\.


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_id_seq', 12, true);


--
-- Name: movies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.movies_id_seq', 3, true);


--
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.roles_id_seq', 2, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: movie_category_join movie_category_join_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movie_category_join
    ADD CONSTRAINT movie_category_join_pkey PRIMARY KEY (category_id, movie_id);


--
-- Name: movies movies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);


--
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- Name: user_role_join user_role_join_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_role_join
    ADD CONSTRAINT user_role_join_pkey PRIMARY KEY (role_id, user_id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: user_role_join fk7bjhc0waiahgml5yismi977dm; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_role_join
    ADD CONSTRAINT fk7bjhc0waiahgml5yismi977dm FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: user_role_join fk7dkc2iuiibx5jpd43nfroch4x; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_role_join
    ADD CONSTRAINT fk7dkc2iuiibx5jpd43nfroch4x FOREIGN KEY (role_id) REFERENCES public.roles(id);


--
-- Name: movie_category_join fkm8mrqligl4d4ityv2o1vec8e3; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movie_category_join
    ADD CONSTRAINT fkm8mrqligl4d4ityv2o1vec8e3 FOREIGN KEY (movie_id) REFERENCES public.movies(id);


--
-- Name: movie_category_join fkqggj2rsbrotv3rpenjgyq71l3; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movie_category_join
    ADD CONSTRAINT fkqggj2rsbrotv3rpenjgyq71l3 FOREIGN KEY (category_id) REFERENCES public.categories(id);


--
-- PostgreSQL database dump complete
--
