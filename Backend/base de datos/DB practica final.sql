-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         11.3.2-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Volcando datos para la tabla gestor_multimedia.categorias: ~3 rows (aproximadamente)
INSERT INTO `categorias` (`Id`, `nombre`) VALUES
	(1, 'Salsa'),
	(2, 'cumbia'),
	(3, 'rock');

-- Volcando datos para la tabla gestor_multimedia.sessiones_activas: ~70 rows (aproximadamente)
INSERT INTO `sessiones_activas` (`Id`, `Token`, `Fecha_inicio`, `Fecha_fin`, `Usuarios_id`) VALUES
	(1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTgyNTQ4NzQ2NDd9.TjnMOnt_xms4Q25kCsHWh6gUPQ5Hf9wQeSWf2RtD4_o', '2024-06-13 05:01:14', NULL, 1),
	(2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTgyNTc3NTg1MDR9.txpxx3fQyH52-77tQmrbIH2t7kRS7TIGrtyVydVW9o8', '2024-06-13 05:49:18', NULL, 1),
	(3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTgyNTc4MTgxMTh9.kmDanfXfoQAUeN5_CuGwHaRZRYfVBx40RQFLwKIa7tU', '2024-06-13 05:50:18', NULL, 1),
	(4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTgyNTgwNjYyMjh9.LPrAS3xijjpDDsttGWrmb3GnrkHI7G9n_OUHvwEPric', '2024-06-13 05:54:26', NULL, 1),
	(5, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTgyNTgzMDYxNjV9.8ajpvn7WUappXP-5LsUZwOJyTfuVK8ZbpvvfVe4tEhc', '2024-06-13 05:58:26', NULL, 1),
	(6, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTgyNTgzNjM2NzR9.5YUvpuFEq21Sztu9znqlbJPtrRtseMwYeeiEjw2UNVg', '2024-06-13 05:59:23', NULL, 1),
	(7, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTgyNTg0MzkzNzd9.bW_Kgop23NW6pW-MWXqKNIcXuqSwqXq335mOPF80-cY', '2024-06-13 06:00:39', NULL, 1),
	(8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyNjY4Njh9._D2L3PROMUYNr9tt6e1Le08DfnXLfY-hgapLMsuPBfM', '2024-06-13 08:21:08', NULL, 1),
	(9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyNjcxMDB9.FarKHpJ4ARKHmmCW4gQHjfiYLVoKlMlOVz_yv5oc3mI', '2024-06-13 08:25:00', NULL, 1),
	(10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyNjc0NTN9.Q2CTDDgksX5fkyek0ZTDhwLuy1ZEytw_Jhllo8Ml-F8', '2024-06-13 08:30:53', NULL, 1),
	(11, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyNjk2MzV9.D5ZN8L7qmCcRTqmOM1u9Wg56RozqmLcEVcEhKX4si8s', '2024-06-13 09:07:15', NULL, 1),
	(12, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyNjk2NjR9.ivV139Kj34ezHsB6AWzUS2UIRzwnO-_A7xfCPn0KV78', '2024-06-13 09:07:44', NULL, 1),
	(13, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyNjk3MDh9.QWz6tTawGUbLwpgmw3FiHXt9hPvNDfvDrYmKTKLDWqo', '2024-06-13 09:08:28', NULL, 1),
	(14, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyNjk3ODR9.2GaelTvDO6oma7eUZi60_F6dGg2fd3ccqbdWjA05Gtk', '2024-06-13 09:09:44', NULL, 1),
	(15, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyNjk4ODh9.6V5GlIbnCBNWz5Ww3pxURwBOjyoJDD9M5xGjih4BKHs', '2024-06-13 09:11:28', NULL, 1),
	(16, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyNzAyNjd9.w6Lz5rfTDjIyA4cmM21iumdBgd89dWBze-uyp7Ra7-8', '2024-06-13 09:17:47', NULL, 1),
	(17, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyNzA2NjJ9.-82xgK4SsSs86qyC-bJn18wC6sjEHd_9gG3eIWtVUtc', '2024-06-13 09:24:22', NULL, 1),
	(18, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyNzA2OTF9.eI51gMZYeYHlRhOW-ORR1FZS_0IwjJZaKYQW8PUmp7k', '2024-06-13 09:24:51', NULL, 1),
	(19, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyNzE1NjR9.xH4LDuRJbZrhN9tLnNub2PVdIXF5SZ9Hz9X6QpNWVTc', '2024-06-13 09:39:24', NULL, 1),
	(20, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyNzIxMzd9.yDKYpq3bX28z_ww9xq4gRVWZXBYpKLHH2twonqoFsco', '2024-06-13 09:48:57', NULL, 1),
	(21, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyNzIyMzB9.BHlnsj2GsnIa_P2IZNcdO2aG-KRQLvoXvpkPRvp3TUE', '2024-06-13 09:50:30', NULL, 1),
	(22, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyNzIyNjZ9.Hs3rC7hTN5-l4QlXaWalU-yged71Ohaqy_M4PRArUSM', '2024-06-13 09:51:06', NULL, 1),
	(23, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyNzIyODd9._xuh5buxLri6SpwpKwoAnmtQ2PCVOjhzxmfajdkIWzc', '2024-06-13 09:51:27', NULL, 1),
	(24, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyNzIzMjV9.zFn7PCSTnx_YB5mjs-_P_j8_P3TwM_-49_483b6fc9I', '2024-06-13 09:52:05', NULL, 1),
	(25, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyNzQ1MzN9.3G43KmrkyMrFWjpByufYvx-tTTyJkI3sce-kkKrLkZg', '2024-06-13 10:28:53', NULL, 1),
	(26, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyNzQ2NDl9.N-flbmfyIGwrqngoo872tD-ww93QmTiBTdPoY4mA_Lo', '2024-06-13 10:30:49', NULL, 1),
	(27, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyNzQ3NjJ9.RKbONyAJUEOeJX6NJrqHxNqPvTiMJFGRBBzV0YVceUM', '2024-06-13 10:32:42', NULL, 1),
	(28, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyNzU1NjF9.i-BsNXvBAYLGTqD8l_v0MTrBC9S8WSEhlMC6KK72aKs', '2024-06-13 10:46:01', NULL, 1),
	(29, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyNzU4NzN9.0EHRQpnlYVwSwQbiTNKdj1FwUgVwNtdvLxhGbRTaMeA', '2024-06-13 10:51:13', NULL, 1),
	(30, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyNzYxODl9.rChszcu4dkEWISu9DQ3nHn5A9MQq_ukStGkLUpXGrzY', '2024-06-13 10:56:29', NULL, 1),
	(31, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyNzY0MzN9.AV6_HxDjr9jQ23rCk6L68O4s5Tcb_vfQy7jGZGsCJ6o', '2024-06-13 11:00:33', NULL, 1),
	(32, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyNzY4MjN9.OSmStn1g9e5Nqq3GR8cMWGp1lCGEhn2yx0y-MDlx7ww', '2024-06-13 11:07:03', NULL, 1),
	(33, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyNzY4ODJ9.ZCKoCFipoiLBp_N5CgSRJgNx049MfFfp_PsylqE2Jp0', '2024-06-13 11:08:02', NULL, 1),
	(34, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyNzY5NzN9.sEiF3Mv_JBGtFJsEdShzIDPNRsudJDALFrGuTPokM6E', '2024-06-13 11:09:33', NULL, 1),
	(35, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyODI2NzB9.4VyCPhF1VogoA_GJYLyeR2Lc9smBnvQgaKmMz6GjBQ4', '2024-06-13 12:44:30', NULL, 1),
	(36, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyODM2MTd9.a9FT4pKGqb7b-5tLl8rsYLcVR2GhrF0NPdjVglV1VXw', '2024-06-13 13:00:17', NULL, 1),
	(37, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyODM5MTF9.Ny8hBGUvtXH54vKiBM18bTOsiQXlLViO8PH6UbBwUS8', '2024-06-13 13:05:11', NULL, 1),
	(38, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyODQwMDV9.Wi7G40RdHOUocqZf8VpdrzSy5_jWdKEUfH2lnKkGwiU', '2024-06-13 13:06:45', NULL, 1),
	(39, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyODQwNzl9.H5Vxt3fZbwN7QxS6xlaq0dGgF7l6J0-m3YZSVGXgdDY', '2024-06-13 13:07:59', NULL, 1),
	(40, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyODQyMzV9.NliVx_865iRQH60kwe6k8-Thi3MbljH4Ij9Cr_etzxY', '2024-06-13 13:10:35', NULL, 1),
	(41, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyODQyNjR9.Urou2og2ceVWTuOHFJ99pMcqhncq9-UdV8NhP8TMrvM', '2024-06-13 13:11:04', NULL, 1),
	(42, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyODQ0MTd9.a6NH6ZgGkzdlwxCiZYsdgsFElMSMnTZZgFnuV1drDAw', '2024-06-13 13:13:37', '2024-06-13 13:13:41', 1),
	(43, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyODU4NTN9.BPU5o-Ws66BSWTaYuYOGxOVVEib2KhnjfxamLb4TUrs', '2024-06-13 13:37:33', '2024-06-13 13:39:36', 1),
	(44, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyODU5ODR9.U0wOiw9o3X1uSogwe4gBX1tfdm2I9AIJevp0vc1Oj6U', '2024-06-13 13:39:44', '2024-06-13 13:41:25', 1),
	(45, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyODYwOTR9.DEbO6l126d33uSIRMJtFYzfpcQajYmPxAbCH7IogezA', '2024-06-13 13:41:34', '2024-06-13 13:42:14', 1),
	(46, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyODYxMzd9.dNSKzGYyvt3WSZ0Ea5Pt8xyknCDjNJJ5Ad0l9ULPDvU', '2024-06-13 13:42:17', '2024-06-13 13:42:30', 1),
	(47, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyODYxNTN9.fzjJwVafTF1ZZGRWeY1ds61GVsVpCMA05eiQOJGcP7Q', '2024-06-13 13:42:33', '2024-06-13 13:44:06', 1),
	(48, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyODYyNTJ9.-Oj5vlak_f9uB4mrGhWbtKVN0ljPIkPAhcKH7oiDRwA', '2024-06-13 13:44:12', '2024-06-13 13:44:17', 1),
	(49, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyODY2ODZ9._6mMTooD7Q0OL1CMFG_aeIN2THaBeCHUE2cf9DSRifc', '2024-06-13 13:51:26', '2024-06-13 13:52:19', 1),
	(50, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyODY3NDJ9.DHCX0ZFGzfpG4cqGduytd6FFyCROsmrp7QjqDzqCzXM', '2024-06-13 13:52:22', NULL, 1),
	(51, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyODY4MzB9.zyrHLnlmsAwkqlumy4f1R26pAl_3_eHXEyyGzdoNCjY', '2024-06-13 13:53:50', NULL, 1),
	(52, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyODY4OTZ9.x0Df7Tf6HJtfwG0WxKwqsogp-H7TxLBtVquFRCnErG0', '2024-06-13 13:54:56', '2024-06-13 13:55:01', 1),
	(53, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyODY5MDR9.uJ7x4gRfznY5GOf8KUpTm0KJDMnE-5MKr91VNzjjZQg', '2024-06-13 13:55:04', '2024-06-13 13:55:07', 1),
	(54, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyODcyMDB9.QG60YKx0pJRLt2hjd8_MGMHT8-N4h3xDdTZaGsoLeq0', '2024-06-13 14:00:00', '2024-06-13 14:00:53', 1),
	(55, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyODcyNTZ9.aXyP_0W4gClNz49hXK1OZvMBkoXVt5laLGkgFjJFyg0', '2024-06-13 14:00:56', '2024-06-13 14:01:44', 1),
	(56, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyODczMTJ9.SCyYXdFmRGnFhCYu2L9H0mMAQNQTtwkgX2g_GwrKICs', '2024-06-13 14:01:52', '2024-06-13 14:13:40', 1),
	(57, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoyLCJpYXQiOjE3MTgyODgwNTJ9.jEM_w7Y1l5PTEL44WXQRZg4HvH8zJI5vSptnMcB_tdo', '2024-06-13 14:14:12', '2024-06-13 14:17:48', 2),
	(58, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoyLCJpYXQiOjE3MTgyODgyOTl9.hoxcYUd7Gc6ixhKKHAooMBmp-Qtm64zqcfcbI25nV3w', '2024-06-13 14:18:19', NULL, 2),
	(59, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoyLCJpYXQiOjE3MTgyODgzNTR9.9sv5NYR72EETHlVqCWmcUxoeBGC7Gv-ofeDI6XvKO6Y', '2024-06-13 14:19:14', NULL, 2),
	(60, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoyLCJpYXQiOjE3MTgyODg0Mjh9.BfxnnYWTdElu6vNwqm1c8UxzvUhBKgO-UxUNNsfgQY0', '2024-06-13 14:20:28', NULL, 2),
	(61, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoyLCJpYXQiOjE3MTgyODg1MDd9.m0dyXXsdRH9USLdH_saNQ6HJj26ZNaWWgG3fsx1Un0w', '2024-06-13 14:21:47', NULL, 2),
	(62, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoyLCJpYXQiOjE3MTgyODg1NTB9.ZdQidK2l6CopfKfEx1FDDTBFqit9VymOtJuz8v7RtEo', '2024-06-13 14:22:30', '2024-06-13 14:22:38', 2),
	(63, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyODg2NDd9.-oWq03fALG-ehSSj-HFiOOyyEarcxN23fg2-vlqaIZA', '2024-06-13 14:24:07', '2024-06-13 14:24:12', 1),
	(64, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyODg2NTV9.tkIx1uHLhR5GdvLhJcHiP1QShbwbhWpGKPTF8kmDNm0', '2024-06-13 14:24:15', '2024-06-13 14:24:49', 1),
	(65, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyODg2OTN9.sR1R_PwA9m_w0qT5eIN1Ck0db4w4MY995Q8bSWfY7V0', '2024-06-13 14:24:53', '2024-06-13 14:27:19', 1),
	(66, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyODg3MDl9.SLDjXScPUre2BveVj9tQGbJB0AU_rpYfVxZgS6ymgzE', '2024-06-13 14:25:09', NULL, 1),
	(67, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyODg3MTl9.2a-tv6ADkIrWLPR3MwrtTO9ko4adKT3EoEtwg0N1K1I', '2024-06-13 14:25:19', NULL, 1),
	(68, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyODg4MjF9.5JgaNwRC957bjFuDLrfk-Pomh1Ru1xQOysUWPf-2atU', '2024-06-13 14:27:01', NULL, 1),
	(69, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoxLCJpYXQiOjE3MTgyODg4NDV9.tW39wcYbrW8YTnk_Khgc7CCRK5etlREWUSdQ1aIosOE', '2024-06-13 14:27:25', '2024-06-13 14:27:28', 1),
	(70, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoyLCJpYXQiOjE3MTgyODg4NTZ9.7w6qAXR3EVdl0fhqkDwYWJsJZ-eepzI7ftx5_LuvFC4', '2024-06-13 14:27:36', '2024-06-13 14:27:38', 2);

-- Volcando datos para la tabla gestor_multimedia.usuarios: ~12 rows (aproximadamente)
INSERT INTO `usuarios` (`Id`, `nombre`, `correo`, `Password`, `Rol`) VALUES
	(1, 'Administrador', 'admin@edu.upct.co', 'practica_final', 'admin'),
	(2, 'usuario', 'user@edu.upct.co', 'practica_final', 'usuario'),
	(4, 'laura', 'laura.upct@edu.co', '123', 'usuario'),
	(5, 'laura', 'laura.lucumi@edu.co', '123', 'usuario'),
	(6, 'laura', 'fhfe', 'laura', 'usuario'),
	(7, 'laura', 'camila', 'dehbd', 'usuario'),
	(8, 'laura', 'fhfe', 'dehbd', 'usuario'),
	(9, 'dehbd', 'camila', 'laura', 'usuario'),
	(11, 'sdd', 'dehbd', 'laura', 'usuario'),
	(13, 'Dehbd', 'dehbd', 'laura', 'usuario'),
	(15, 'dehbd', 'dehbd', 'laura', 'usuario'),
	(16, 'laura', 'eded@edu.co', '1234', 'usuario');

-- Volcando datos para la tabla gestor_multimedia.videos: ~12 rows (aproximadamente)
INSERT INTO `videos` (`Id`, `Nombre`, `Autor`, `Url`, `Categoria_id`) VALUES
	(1, 'SONIDO BESTIAL', 'RICARDO RAY & BOBBY CRUZ', 'https://www.youtube.com/watch?v=eqwu2NpbQT8', 1),
	(4, 'Cali Pachanguero', 'Grupo Niche', 'https://www.youtube.com/watch?v=SoT_Ls_AH-Y', 1),
	(5, 'Eres Picaflor', 'Son Master', 'https://www.youtube.com/watch?v=pKmZjVL2_uU', 2),
	(6, 'La Pollera colora', 'Wilson Choperena, Pedro Salcedo y Su Orquesta', 'https://www.youtube.com/watch?v=6JaWy27lwp8', 2),
	(7, 'Loquito por ti', 'Armando Hernandez', 'https://www.youtube.com/watch?v=uM8ZDHvlJt0', 2),
	(8, 'Prende La Vela', 'Totó La Momposina', 'https://www.youtube.com/watch?v=4aXAizudeTk', 2),
	(9, 'Devuélveme a mi chica', 'Hombres G', 'https://www.youtube.com/watch?v=TduzyYXzSJ4', 3),
	(10, 'Oye Mi Amor', 'Maná', 'https://www.youtube.com/watch?v=6ldw5Zmx1RI', 3),
	(11, 'LA FLACA', 'JARABE DE PALO', 'https://www.youtube.com/watch?v=R2rP8ZU52gU', 3),
	(12, 'ESCARCHA', 'HECTOR LAVOE', 'EDE', 1),
	(13, 'ESCARCHA', 'HECTOR LAVOE', 'EDE', 1),
	(14, 'ESCARCHA', 'HECTOR LAVOE', 'EDE', 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
