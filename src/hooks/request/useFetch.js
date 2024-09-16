import request from '@/helper/axiosUtil';
import { useQueryClient, useMutation } from '@tanstack/react-query';

import { toast } from 'react-toastify';

export default function useFetch(props) {
	const { url, validate, method = 'patch', showError = true } = props;
	const qClient = useQueryClient();

	const action = (data) => {
		let currUrl = `/${url}/`;

		if (data?.patchId) {
			currUrl += `${data.patchId}/`
			delete data.patchId;
		}
		return request({ url: currUrl, method, data, headers: { 'Content-Type': 'application/json' } });
	};

	return useMutation({
		mutationFn: (data, params = {}) => action(data, params),
		onSuccess: (res) => {
			if ([200, 201].includes(res.status) && props.callback && typeof props.callback === 'function') {
				props.callback(res);
			} else if (res.response.data) {
				if (props.onError && typeof props.onError === 'function') {
					props.onError(res.response);
				}
				const d = res.response.data;
				if (showError && !d.data.includes('html')) {
					Object.keys(d).forEach((k) => {
						toast.error(d[k]?.length ? d[k][0] : d[k] || 'Error');
					});
				}
			}
		},
		onError: (err) => {
			if (err.response.data) {
				const d = err.response.data;
				Object.keys(d).forEach((k) => {
					toast.error(d[k] || 'Error');
				});
			}
		},
		onSettled: () => {
			validate?.forEach((val) => qClient.invalidateQueries(val));
		},
	});
}
